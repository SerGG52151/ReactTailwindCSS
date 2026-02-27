import PrimaryButton from "./PrimaryButton";

function SideBar() {
    const extraItems = [
        { label: 'Profile', href: '#' },
        { label: 'Settings', href: '#' },
        { label: 'Notifications', href: '#' },
        { label: 'Help', href: '#' },
    ];

    return (
        <aside className="hidden md:block w-48 bg-gray-100 p-6 sticky top-0 h-screen overflow-auto">
            <h2 className="text-xl font-bold mb-4">Navigation</h2>
            <nav>
                <PrimaryButton/>
                {extraItems.map((item) => (
                    <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-2 hover:bg-gray-200 rounded transition"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
        </aside>
    );
}

export default SideBar;