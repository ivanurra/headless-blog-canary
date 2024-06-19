const Footer = ({ title }) => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer class="bg-white rounded-lg shadow m-4 dark:bg-black">
      <div class="w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © {year}{" "}
          <a href="/" class="hover:underline">
            {title}
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
