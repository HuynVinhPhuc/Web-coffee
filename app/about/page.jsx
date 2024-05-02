import BreadCrumbs from "@/components/layouts/BreadCrumbs";

const About = () => {
  const breadCrumbs = [
    { name: "Trang Chủ", url: "/" },
    { name: "Giới Thiệu", url: "/about" },
  ];
  return (
    <>
      <BreadCrumbs breadCrumbs={breadCrumbs} />
      <div className="container px-10 sm:px-60 my-10 ">
        <p className="flex justify-center text-3xl font-semibold mb-10">
          Về chúng tôi
        </p>
        <div className="mt-2">
          <div className="text-[#666]">
            <p>Chúng tôi là Cửa hàng cà phê EspressoHub.</p>
            <p>
              Được thành lập vào tháng 1 năm 2024, với mục đích hoàn thành Niên
              luận ngành của Khoa Kỹ thuật phần mềm, trường CNTT&TT, đại học Cần
              Thơ
            </p>
          </div>
          <br />
          <p className="font-semibold text-lg">Thông tin về cửa hàng:</p>
          <br />
          <div className="text-[#666]">
            <p>Tên cửa hàng: EspressoHub</p>
            <p>
              Thành viên: Trần Quốc Bảo - B2012064, Huỳnh Vĩnh Phúc - B2012129
            </p>
            <p>Website: http://website.com</p>
            <p>
              Email: baob2012064@student.ctu.edu.vn -
              phucb2012129@student.ctu.edu.vn
            </p>
            <p>Liên hệ (giờ hành chính): 0825873028</p>
          </div>
          <br />
          <p className="font-semibold text-lg">Tầm nhìn:</p>
          <br />
          <p className="font-bold text-[#666]">
            "Trở thành một thương hiệu cà phê hàng đầu, mang lại trải nghiệm
            tuyệt vời và lan tỏa niềm đam mê cà phê đến mọi người."
          </p>
          <br />
          <p className="font-semibold text-lg">Sứ mệnh:</p>
          <br />
          <div className="text-[#666]">
            <p>
              - ​Cung cấp cho khách hàng những sản phẩm cà phê chất lượng cao,
              từ nguồn gốc tốt nhất.
            </p>
            <p>
              ​- Xây dựng một cộng đồng yêu cà phê, nơi mọi người có thể tìm
              hiểu, trao đổi và tận hưởng niềm đam mê cà phê.
            </p>
            <p>
              ​- Đóng góp tích cực vào cộng đồng và môi trường bằng cách thực
              hiện các hoạt động xã hội và môi trường bền vững.
            </p>
          </div>
          <br />
          <p className="font-semibold text-lg">Mục tiêu:</p>
          <br />
          <div className="text-[#666]">
            <p>
              - Tạo trải nghiệm độc đáo cho khách hàng khi mua và sử dụng sản
              phẩm bên cửa hàng.
            </p>
            <p>- Kết hợp giá trị văn hoá vào từng sản phẩm cà phê.</p>
            <p>- Mở rộng thị trường sang các thị trường quốc tế.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
