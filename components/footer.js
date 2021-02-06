export default function Footer() {
    return (
        <footer className="bg-black">
            <ul className="flex items-center justify-between lg:container px-4 py-6 mx-auto text-sm text-white md:px-6">
                <li>
                    <a
                        href="https://pfspl.in"
                        rel="noopener noreferrer"
                        className="font-bold"
                    >
                        PFS
                    </a>{' '}
                    All Rights Reserved.
                </li>

                <li>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold"
                    >
                        LinkedIn
                    </a>
                </li>
            </ul>
        </footer>
    );
}
