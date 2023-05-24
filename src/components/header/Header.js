function Header({ title, subtitle }) {
  return (
    <header className="tw-mx-5 tw-py-5 header-main">
      <h1 className="tw-text-lg md:tw-text-4xl tw-font-bold">{title}</h1>
      <p className="tw-text-sm tw-text-gray-500">{subtitle}</p>
    </header>
  );
}

export default Header;