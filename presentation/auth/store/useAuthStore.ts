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

    changeStatus: (token?: string, user?: User) => boolean;
}

export const useAuthStore = create<AuthState>()((set,get)=>({
    //properties
    status: 'checking',
    token: undefined,
    user: undefined,

    //methods or actions

    changeStatus: (token?: string, user?: User) => {

        if (!token || !user) {
            set({ status: 'unauthenticated', token: undefined, user: undefined });
            //llamar logout
            return false;
        }
        set({
            status: 'authenticated',
            token: token,
            user: user
        })

        return true;
    },

    login: async (email:string,password:string)=>{
        const response = await authLogin(email, password);
        /* if (!response) {
            set({status: 'unauthenticated', token: undefined, user: undefined});
            return false;
        }
        set({
            status: 'authenticated',
            token: response.token,
            user: response.user
        })

        return true; */
        return get().changeStatus(response?.token, response?.user)

    },

    checkStatus: async () => {
        
        const response = await authCheckStatus();

        /* if (!response) {
            set({ status: 'unauthenticated', token: undefined, user: undefined });
            return;
        }
        set({
            status: 'authenticated',
            token: response.token,
            user: response.user
        })

        return ; */
        get().changeStatus(response?.token, response?.user);

    },
    logout: async () => {
        //clear token local storage
        set({status: 'unauthenticated', token: undefined, user: undefined})
    },

}))