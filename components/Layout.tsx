function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>
                <li>home</li>
                <li>sign-in / register</li>
            </nav>
            {children}
        </div>
    );
}

export default Layout;