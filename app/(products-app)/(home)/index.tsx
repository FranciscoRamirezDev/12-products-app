import ProductList from "@/presentation/products/components/ProductList";
import { useProducts } from "@/presentation/products/hooks/useProducts";
import { useThemeColor } from "@/presentation/theme/hooks/useThemeColor";
import React from "react";
import { ActivityIndicator, View } from "react-native";

const HomeScreen = () => {
  const colorPrimary = useThemeColor({},'primary');

  const { productsQuery, loadNextPage } = useProducts();

  if (productsQuery.isLoading) {
    return(
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator color={colorPrimary} size={30}/>
      </View>
    )
  }

  return (
    <View style={{ paddingHorizontal: 10 }}>
      <ProductList products={productsQuery.data?.pages.flatMap((page)=>page)??[]} loadNextPage={loadNextPage}/>
    </View>
  );
};

export default HomeScreen;
