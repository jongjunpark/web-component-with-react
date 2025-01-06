import "@imwebme/clay-experimental/style.css";
// @ts-expect-error: Unreachable code error
import "@imwebme/clay-stylesheet";

export const Provider = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};
