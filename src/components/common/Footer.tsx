function Footer() {
  const year: number = new Date().getFullYear();
  return (
    <div className="w-full h-[10vh] p-10 flex items-center justify-center bg-purple-900">
      <h4 className="text-white font-bold text-lg">
        Copyright {String.fromCodePoint(169)} {year} budget app. All right
        reserved.
      </h4>
    </div>
  );
}

export default Footer;
