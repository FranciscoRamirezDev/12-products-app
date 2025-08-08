import { authCheckStatus, authLogin } from "@/core/auth/actions/auth-actions";
import { User } from "@/core/auth/interface/user";
import { create } from 'zustand';

export type AuthStatus = 'authenticated' | 'unauthenticated' | 'checking'


export interface AuthState {
    status: AuthStatus;
    token?: string;
    user?: User;

    login: (email: string, password: string) => Promise<boolean>;
    checkStatus: () => Promise<void>;
    logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()((set,get)=>({
    //properties
    status: 'checking',
    token: undefined,
    user: undefined,

    //methods or actions
    login: async (email:string,password:string)=>{
        const response = await authLogin(email, password);
        if (!response) {
            set({status: 'unauthenticated', token: undefined, user: undefined});
            return false;
        }
        set({
            status: 'authenticated',
            token: response.token,
            user: response.user
        })

        // save token local storage

        return true;
    },

    checkStatus: async () => {

        const response = await authCheckStatus();

        if (!response) {
            set({ status: 'unauthenticated', token: undefined, user: undefined });
            return;
        }
        set({
            status: 'authenticated',
            token: response.token,
            user: response.user
        })

        return ;

    },
    logout: async () => {
        //clear token local storage
        set({status: 'unauthenticated', token: undefined, user: undefined})
    },

}))