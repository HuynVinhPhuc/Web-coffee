import BreadCrumbs from "@/components/layouts/BreadCrumbs";

const Contact = () => {
  const breadCrumbs = [
    { name: "Trang Chủ", url: "/" },
    { name: "Liên Hệ", url: "/contact" },
  ];
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="container px-30 sm:px-96 my-20 ">
        <div className="px-10 sm:px-20">
          <div className="border border-grey-200 rounded-lg">
            <div className="text-center py-8">
              <div>
                <p className="font-semibold text-3xl">Thông tin liên lạc</p>
                <br />
                <div className="text-[#666]">
                  <p>
                    785 15h Street, Office 478 <br /> Berlin, De 81566
                  </p>
                  <br />
                  <div>
                    <a href="https://mail.google.com/">info@email.com</a>
                  </div>
                </div>
                <br />
                <p className="font-semibold text-lg">+84 825 873 028</p>
              </div>
              <div className="flex gap-6 py-5 justify-center">
                <div className="text-2xl cursor-pointer hover:text-yellow-600">
                  <a href="https://www.instagram.com/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
                <div className="text-2xl cursor-pointer hover:text-blue-600">
                  <a href="https://twitter.com/">
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                <div className="text-2xl cursor-pointer hover:text-blue-600">
                  <a href="https://www.linkedin.com/">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </div>
                <div className="text-2xl cursor-pointer hover:text-red-600">
                  <a href="https://www.youtube.com/">
                    <i className="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
