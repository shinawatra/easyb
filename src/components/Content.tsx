import { useEffect } from 'react';

export default function Content({ display }: { display: boolean }) {
  useEffect(() => {
    const page = document.getElementById('page')!;
    if (display) {
      page.style.backgroundColor = '#9698a69f';
      page.style.transition = 'background 0.5s';
    } else {
      page.style.backgroundColor = '#f5f5f5';
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        page.style.backgroundColor = '#f5f5f5';
      }
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, [display]);

  return (
    <main className="relative overflow-hidden">
      <section
        id="page"
        className="flex flex-col-reverse md:flex-row justify-between items-center ml-0 md:ml-5 xl:ml-30"
      >
        <aside className="my-10 md:mt-30 xl:mt-0">
          <h1 className="text-[#2d314d] text-center md:text-left font-public text-3xl md:text-2xl xl:text-3xl">
            Next generation digital banking
          </h1>

          <p className="text-[#9698a6] my-7 font-public text-center md:text-left">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>

          <a
            href="#"
            className="color text-white text-base px-8 py-3.5 rounded-4xl hover:opacity-70 font-public w-50 text-center  md:inline-block block m-auto md:mb-10 xl:mb-0"
          >
            Request Invite
          </a>
        </aside>

        <aside>
          <div className="md:-translate-y-16 xl:-translate-y-18 relative">
            <img
              src="bg-intro-desktop.svg"
              alt="Image"
              className="w-full md:translate-x-20 xl:translate-x-50 hidden md:block"
            />

            <img
              src="bg-intro-mobile.svg"
              alt="Image"
              className="w-full h-full block md:hidden"
            />

            {display ? (
              <img
                src="image-mockups.png"
                alt="Mockup"
                className="w-full md:w-[350px] md:h-[450px] xl:w-[600px] xl:h-[780px] absolute -top-13 -right-0 md:top-7 xl:top-12 xl:-right-26 md:-right-15"
              />
            ) : null}
          </div>
        </aside>
      </section>

      {/* Api Section */}
      <section className="bg-[#e6e7e9]">
        <article className="mx-5 xl:mx-30 md:mx-5 py-15 text-center xl:text-left">
          <div className="mb-10">
            <h1 className="text-[#2d314d] font-public text-2xl md:text-3xl">
              Why choose Easybank?
            </h1>
            <p className="text-[#9698a6] my-5 font-public">
              We leverage Open Banking to turn your bank account into your
              financial hub. <br /> Control your finances like never before.
            </p>
          </div>

          <div className="flex flex-col xl:flex-row item-center gap-5 md:gap-10 xl:gap-5">
            <aside>
              <img
                src="icon-online.svg"
                alt="Online"
                className="w-17.5 md:w-20 m-auto xl:m-0"
              />
              <h1 className="text-[#2d314d] my-5 font-public text-xl md:text-2xl">
                Online Banking
              </h1>
              <p className="text-[#9698a6] text-base font-public">
                Our modern web and mobile application allow you to keep track of
                your finances wherever you are in the world.
              </p>
            </aside>

            <aside>
              <img
                src="icon-budgeting.svg"
                alt="Budget"
                className="w-17.5 md:w-20 m-auto xl:m-0"
              />
              <h1 className="text-[#2d314d] my-5 font-public text-xl md:text-2xl">
                Simple Budgeting
              </h1>
              <p className="text-[#9698a6] font-public text-base">
                See exactly where your money goes each month. Receive
                notifications when you're clost to hitting your limits.
              </p>
            </aside>

            <aside>
              <img
                src="icon-onboarding.svg"
                alt="Online"
                className="w-17.5 md:w-20 m-auto xl:m-0"
              />
              <h1 className="text-[#2d314d] my-5 font-public text-xl md:text-2xl">
                Fast Onboarding
              </h1>
              <p className="text-[#9698a6] font-public text-base">
                We don't do branches. Open your account in minutes online and
                start taking control of your finances right away.
              </p>
            </aside>

            <aside>
              <img
                src="icon-api.svg"
                alt="Online"
                className="w-17.5 md:w-20 m-auto xl:m-0"
              />
              <h1 className="text-[#2d314d] my-5 font-public text-xl md:text-2xl">
                Open API
              </h1>
              <p className="text-[#9698a6] font-public text-base">
                Manage your savings, investments, pension, and much more from
                one account. Tracking your money has never been easier.
              </p>
            </aside>
          </div>
        </article>
      </section>

      {/* Latest Article Section */}
      <section className="my-12.5">
        <article className="mx-5 md:mx-5 xl:mx-30 ">
          <h1 className="text-[#2d314d] mb-10 font-public text-2xl md:text-3xl text-center xl:text-left">
            Latest Article
          </h1>

          <div className="flex flex-col xl:flex-row gap-6">
            <aside className="bg-white rounded pb-7.5">
              <img
                src="image-currency.jpg"
                alt="Currency"
                className="w-full h-[230px] rounded-t-lg mb-5"
              />
              <div className="mx-5">
                <small className="text-[#9698a6] font-public text-xs md:text-sm">
                  By Claire Robinson
                </small>

                <div className="my-5">
                  <a
                    href="#"
                    className="text-[#2d314d] hover:text-[#31d35c] text-base md:text-lg"
                  >
                    Receive money in any currency with no fees
                  </a>
                </div>
                <p className="text-[#9698a6] font-public text-sm md:text-base">
                  The world is getting smaller and we're becoming more mobile.
                  So why should you be forced to only receive money in a
                  single...
                </p>
              </div>
            </aside>

            <aside className="bg-white rounded pb-7.5">
              <img
                src="image-restaurant.jpg"
                alt="Currency"
                className="w-full h-[230px] rounded-t-lg mb-5"
              />
              <div className="mx-5">
                <small className="text-[#9698a6] font-public text-xs md:text-sm">
                  By Wilson Hutton
                </small>

                <div className="my-5">
                  <a
                    href="#"
                    className="text-[#2d314d] hover:text-[#31d35c] text-lg"
                  >
                    Treat yourself without worrying about money
                  </a>
                </div>

                <p className="text-[#9698a6] font-public text-sm md:text-base">
                  Our simple budgeting feature allows you to seperate out your
                  spending and set realistic limits each month. That means
                  you...
                </p>
              </div>
            </aside>

            <aside className="bg-white rounded pb-7.5">
              <img
                src="image-plane.jpg"
                alt="Plane"
                className="w-full h-[230px] rounded-t-lg mb-5"
              />
              <div className="mx-5">
                <small className="text-[#9698a6] font-public text-xs md:text-sm">
                  By Rasheed Amodu
                </small>

                <div className="my-5">
                  <a
                    href="#"
                    className="text-[#2d314d] hover:text-[#31d35c] text-lg"
                  >
                    Take your Easybank card wherever you go
                  </a>
                </div>

                <p className="text-[#9698a6] font-public text-sm md:text-base">
                  We want you to enjoy your travels. This is why we don't charge
                  any fees on purchases while you're abroad. We'll even show
                  you...
                </p>
              </div>
            </aside>

            <aside className="bg-white rounded pb-7.5">
              <img
                src="image-confetti.jpg"
                alt="confetti"
                className="w-full h-[230px] rounded-t-lg mb-5"
              />
              <div className="mx-5">
                <small className="text-[#9698a6] font-public text-xs md:text-sm">
                  By Adeshina Adegbite
                </small>

                <div className="my-5">
                  <a
                    href="#"
                    className="text-[#2d314d] hover:text-[#31d35c] text-lg"
                  >
                    Our invite-only Beta accounts are now live!
                  </a>
                </div>

                <p className="text-[#9698a6] font-public text-sm md:text-base">
                  After a lot of hard work by the whole team, we're excited to
                  launch our closed beta. It's easy to request an invite through
                  the site...
                </p>
              </div>
            </aside>
          </div>
        </article>
      </section>
    </main>
  );
}
