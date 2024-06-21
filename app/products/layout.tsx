type LayoutProps = {
    children: React.ReactNode;
  };
  
  export default async function Layout({ children }: LayoutProps) {
    return (
      <div>
        <div>{children}</div>
      </div>
    );
  }