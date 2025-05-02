export default function Footer() {
  return (
    <footer className="bg-[#2d314d] py-7.5">
      <div className="mx-5 md:mx-5 xl:mx-30 flex flex-col md:flex-row justify-between items-center">
        <aside className="flex flex-col md:flex-row items-center gap-10 md:gap-15 xl:gap-25">
          <section>
            <a href="#" className="relative flex items-center gap-2.5">
              <img src="logo.svg" alt="Logo" />
              <span className="text-white absolute left-7 text-xl font-medium">
                easybank
              </span>
            </a>

            <div className="flex items-center mt-8 gap-3">
              <a href="#">
                <img
                  src="icon-facebook.svg"
                  alt="Facebook"
                  className="size-4"
                />
              </a>

              <a href="#">
                <img src="icon-youtube.svg" alt="Youtube" className="size-4" />
              </a>

              <a href="#">
                <img src="icon-twitter.svg" alt="Twitter" className="size-4" />
              </a>

              <a href="#">
                <img
                  src="icon-pinterest.svg"
                  alt="Pinterest"
                  className="size-4"
                />
              </a>

              <a href="#">
                <img
                  src="icon-instagram.svg"
                  alt="Instagram"
                  className="size-4"
                />
              </a>
            </div>
          </section>

          <section className="flex flex-col md:flex-row gap-0 md:gap-15">
            <div className="flex flex-col">
              <a
                href="#"
                className="font-public text-white hover:text-[#31d35c] text-base"
              >
                About Us
              </a>
              <a
                href="#"
                className="font-public text-white hover:text-[#31d35c] text-base my-2.5"
              >
                Contact
              </a>
              <a
                href="#"
                className="font-public text-white hover:text-[#31d35c] text-base mb-2"
              >
                Blog
              </a>
            </div>

            <div className="flex flex-col">
              <a
                href="#"
                className="font-public text-white hover:text-[#31d35c] text-base"
              >
                Careers
              </a>
              <a
                href="#"
                className="font-public text-white hover:text-[#31d35c] text-base my-2.5"
              >
                Support
              </a>
              <a
                href="#"
                className="font-public text-white hover:text-[#31d35c] text-base"
              >
                Privacy Policy
              </a>
            </div>
          </section>
        </aside>

        <aside>
          <div className="flex justify-center md:justify-end mt-10">
            <a
              href="#"
              className="color text-white font-public text-base px-8 py-2.5 rounded-4xl hover:opacity-70"
            >
              Request Invite
            </a>
          </div>
          <p className="text-[#9698a6] font-public mt-7">
            &copy; Easybank. All Rights Reserved
          </p>
        </aside>
      </div>
    </footer>
  );
}
