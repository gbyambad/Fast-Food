import { Redirect, Slot } from "expo-router";

const _layout = () => {
  const isAuthonticated = false;

  if (!isAuthonticated) return <Redirect href="/sign-in" />;
  return <Slot />;
};

export default _layout;
