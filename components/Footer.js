const navigation = [
  { name: "About", href: "#" },
  { name: "Shop", href: "#" },
  { name: "Jobs", href: "#" },
  { name: "Terms and Conditions", href: "#" },
];

const Footer = () => {
  return (
    <footer className="bg-neutral-700">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {navigation.map((item, index) => (
            <div className="px-6 py-2" key={index}>
              <a href={item.href} className="text-gray-300 hover:text-orange-400">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-8 text-center text-gray-400">
          &copy; 2022 JoBox Tool Co. Copyright, All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
