const NumberQuestions = 20;

const quizData = [
    {
        question_id: "DC3FB09B",
        question: "Anh/chị hãy cho biết có mấy cách nhận biết đám cháy qua các dấu hiệu ban đầu?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Khói, mùi.", image: "" },
            { text: "Ánh lửa, khói.", image: "" },
            { text: "Khói, ánh lửa – tiếng nổ – mùi sản phẩm cháy.", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "5BC7B712",
        question: "Khi phát hiện cháy, anh/chị cần thực hiện các động tác theo trình tự nào dưới đây:",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Hô to: Cháy! Cháy! Cháy!, cúp cầu dao điện, tham gia chữa cháy, đồng thời gọi điện thoại báo lực lượng chữa cháy chuyên nghiệp.", image: "" },
            { text: "Gọi điện thoại báo lực lượng chữa cháy chuyên nghiệp, cúp cầu dao điện, hô to: Cháy! Cháy! Cháy!, tham gia chữa cháy.", image: "" },
            { text: "Hô to: Cháy! Cháy! Cháy!, tiến hành cúp cầu dao điện, đồng thời gọi điện thoại báo lực lượng chữa cháy chuyên nghiệp.", image: "" }
        ],
        correct: 0
    },
    {
        question_id: "20E0A362",
        question: "Người phát hiện cháy phải bằng mọi cách báo ngay cho 01 hoặc tất cả các đơn vị:",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Đội dân phòng hoặc Đội PCCC cơ sở nơi xảy ra hỏa hoạn.", image: "" },
            { text: "Đơn vị Cảnh sát PCCC gần nhất.", image: "" },
            { text: "Chính quyền địa phương sở tại hoặc cơ quan Công an nơi gần nhất.", image: "" },
            { text: "Tất cả a, b, c đều đúng.", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "BEDE0A02",
        question: "Khi đang ở trong siêu thị, nếu phát hiện siêu thị đang bị cháy, anh/chị sẽ làm gì?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Hô hoán cho mọi người chạy", image: "" },
            { text: "Tới nơi có cháy để chữa cháy", image: "" },
            { text: "Gọi điện cho lực lượng Cảnh sát PCCC", image: "" },
            { text: "Bình tĩnh, báo động có cháy, ngắt cầu giao điện, dùng phương tiện chữa cháy tại chỗ chữa cháy và gọi điện báo cho lực lượng Cảnh sát PC&CC.", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "039873D4",
        question: "Khi đang ở trên tầng 18 của chung cư, mà ở tầng 17 bị cháy không thể xuống phía dưới được, anh/chị sẽ làm gì?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Nhảy xuống", image: "" },
            { text: "Cố chạy xuống", image: "" },
            { text: "Chạy lên trên tầng cao nhất, dùng khăn ướt bịt mũi và gọi điện để lực lượng Cảnh sát PCCC ứng cứu.", image: "" },
            { text: "Ở trong phòng căn hộ đóng kín cửa lại", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "45F67484",
        question: "Khi bị cháy ở nhà cao tầng, anh/chị sẽ thoát nạn như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Chạy lên", image: "" },
            { text: "Đi bằng thang máy", image: "" },
            { text: "Chạy xuống bằng cầu thang bộ theo biển chỉ dẫn thoát nạn trong tòa nhà.", image: "" },
            { text: "Ở trong phòng đóng kín cửa lại", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "0B6146D8",
        question: "Trong các ký túc xá, nhà trọ, người ta thường dùng bếp dầu để đun nấu. Khi xảy cháy, bếp dầu do chế dầu lúc đun nấu, phạm vi cháy mới chỉ xung quanh bếp dầu, tại chỗ không có bình chữa cháy, chỉ có: nước, cát, chăn (mền). Anh/chị xử lý thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Xối nước.", image: "" },
            { text: "Tạt cát.", image: "" },
            { text: "Lấy chăn (mền) nhúng nước trùm lên.", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "647062AC",
        question: "Anh, chị hãy cho biết khi cháy xảy ra xử lý như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Cắt điện, dùng phương tiện chữa cháy dập tắt đám cháy", image: "" },
            { text: "Báo động, cắt điện, dùng phương tiện chữa cháy dập tắt đám cháy, gọi điện thoại cho lực lượng chữa cháy số điện thoại 114", image: "" },
            { text: "Dùng phương tiện chữa cháy dập tắt đám cháy", image: "" }
        ],
        correct: 1
    },
    {
        question_id: "21484332",
        question: "Trong đêm, anh A đang ngủ thì phát hiện có mùi gas bên trong nhà mình. Theo anh/chị, anh A cần tiến hành xử lý trình tự như thế nào là đúng nhất?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Mở đèn chiếu sáng, khóa bình gas, mở cửa thông thoáng gió.", image: "" },
            { text: "Mở cửa thông thoáng gió, mở đèn chiếu sáng, khóa bình gas.", image: "" },
            { text: "Mở cửa thông thoáng gió, khóa bình gas, không bật các thiết bị tiêu thụ điện.", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "D1A9E8DE",
        question: "Cách tránh ngộ độc khí trong đám cháy?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Phải ngay lập tức mở tất cả các cửa ở hướng không có cháy để giảm áp suất.", image: "" },
            { text: "Không được mở cửa ở hướng có cháy và khói xông vào phòng.", image: "" },
            { text: "Các phương pháp phòng khói khẩn cấp như khăn ướt luôn có tác dụng tốt vì vậy bạn nên luôn để 1 chai nước trong phòng.", image: "" },
            { text: "Cả a, b, c, d đều đúng.", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "2A452CDA",
        question: "Điều kiện an toàn về PCCC đối với hộ gia đình là:",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Nơi đun nấu, nơi thờ cúng, nơi có sử dụng nguồn gây cháy phải đảm bảo an toàn về PCCC.", image: "" },
            { text: "Tài sản, vật tư, chất cháy phải bố trí, sắp xếp, bảo quản, sử dụng đúng quy định an toàn PCCC.", image: "" },
            { text: "Có dự kiến tình huống cháy thoát nạn và biện pháp chữa cháy có phương tiện chữa cháy ban đầu phù hợp.", image: "" },
            { text: "Tất cả a, b, c đều đúng.", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "B7F4B44F",
        question: "Phương án chữa cháy của cơ sở được tổ chức thực tập như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Ít nhất mỗi tháng/lần", image: "" },
            { text: "Ít nhất mỗi quý/lần", image: "" },
            { text: "Ít nhất 6 tháng/lần", image: "" },
            { text: "Ít nhất mỗi năm/lần", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "607ADFD4",
        question: "Cảnh sát phòng cháy và chữa cháy có trách nhiệm kiểm tra an toàn PCCC đối với cơ sở có nguy hiểm về cháy, nổ mấy lần trong 01 năm?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "01 lần/năm", image: "" },
            { text: "02 lần/năm", image: "" },
            { text: "03 lần/năm", image: "" },
            { text: "04 lần/năm", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "965170F7",
        question: "Điều 5 Luật PCCC quy định trách nhiệm PCCC như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Trách nhiệm của Cơ quan, tổ chức", image: "" },
            { text: "Trách nhiệm của cá nhân và hộ gia đình", image: "" },
            { text: "Cả a và b", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "98A66D5F",
        question: "Anh/chị hãy cho biết khi xảy ra cháy, điện thoại cho lực lượng Cảnh sát PCCC theo số điện thoại nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "113", image: "" },
            { text: "114", image: "" },
            { text: "115", image: "" }
        ],
        correct: 1
    },
    {
        question_id: "6BB7108D",
        question: "Anh/chị hãy cho biết hành vi tổ chức thi công, xây dựng công trình thuộc diện phải thẩm duyệt về phòng cháy và chữa cháy khi chưa có giấy chứng nhận thẩm duyệt về phòng cháy và chữa cháy sẽ xử phạt hành chính như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Phạt tiền từ 10,000,000 đồng đến 15,000,000 đồng", image: "" },
            { text: "Phạt tiền từ 15,000,000 đồng đến 20,000,000 đồng", image: "" },
            { text: "Phạt tiền từ 15,000,000 đồng đến 25,000,000 đồng", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "809AE4E1",
        question: "Anh/chị hãy cho biết hành vi không trang bị phương tiện chữa cháy thông dụng cho nhà, công trình theo quy định sẽ xử phạt hành chính như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Phạt tiền từ 3,000,000 đồng đến 5,000,000 đồng", image: "" },
            { text: "Phạt tiền từ 5,000,000 đồng đến 10,000,000 đồng", image: "" },
            { text: "Phạt tiền từ 10,000,000 đồng đến 15,000,000 đồng", image: "" }
        ],
        correct: 1
    },
    {
        question_id: "9F1D93FD",
        question: "Hành vi làm mất tác dụng hoặc để nội quy, tiêu lệnh, biển báo, biển cấm, biển chỉ dẫn về PCCC cũ, mờ, không nhìn rõ chữ, ký hiệu chỉ dẫn sẽ xử phạt như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Phạt cảnh cáo", image: "" },
            { text: "Phạt tiền từ 100,000 đồng đến 300,000 đồng", image: "" },
            { text: "Phạt cảnh cáo hoặc phạt tiền từ 100,000 đồng đến 300,000 đồng", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "C504057B",
        question: "Anh, chị hãy cho biết hành vi không xuất trình hồ sơ, tài liệu phục vụ cho kiểm tra an toàn phòng cháy và chữa cháy sẽ xử phạt như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Phạt tiền từ 1,000,000 đồng đến 3,000,000 đồng", image: "" },
            { text: "Phạt tiền từ 3,000,000 đồng đến 5,000,000 đồng", image: "" },
            { text: "Phạt cảnh cáo", image: "" }
        ],
        correct: 0
    },
    {
        question_id: "20DA391D",
        question: "Anh, chị hãy cho biết hành vi không lập hồ sơ quản lý, theo dõi phòng cháy và chữa cháy sẽ xử phạt hành chính như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Phạt tiền từ 1,000,000 đồng đến 3,000,000 đồng", image: "" },
            { text: "Phạt tiền từ 3,000,000 đồng đến 5,000,000 đồng", image: "" },
            { text: "Phạt tiền từ 2,000,000 đồng đến 5,000,000 đồng", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "3F8A625C",
        question: "Anh, chị hãy cho biết hành vi vận chuyển chất, hàng nguy hiểm về cháy, nổ mà không có giấy phép vận chuyển chất, hàng nguy hiểm về cháy, nổ sẽ xử phạt hành chính như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Phạt tiền từ 5,000,000 đồng đến 10,000,000 đồng", image: "" },
            { text: "Phạt tiền từ 10,000,000 đồng đến 15,000,000 đồng", image: "" },
            { text: "Phạt tiền từ 20,000,000 đồng đến 30,000,000 đồng", image: "" }
        ],
        correct: 1
    },
    {
        question_id: "E25534FA",
        question: "Anh, chị hãy cho biết hành vi sử dụng nguồn lửa, các thiết bị điện tử hoặc các thiết bị, dụng cụ sinh lửa, sinh nhiệt khác ở những nơi có quy định cấm sẽ xử phạt hành chính như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Phạt tiền từ 2,000,000 đồng đến 5,000,000 đồng", image: "" },
            { text: "Phạt tiền từ 5,000,000 đồng đến 10,000,000 đồng", image: "" },
            { text: "Phạt tiền từ 10,000,000 đồng đến 15,000,000 đồng", image: "" }
        ],
        correct: 0
    },
    {
        question_id: "E717BAE3",
        question: "Anh, chị hãy cho biết các trường hợp nào sau đây bị tạm đình chỉ hoạt động đối với cơ sở, phương tiện giao thông cơ giới, hộ gia đình, cá nhân không đảm bảo an toàn về phòng cháy và chữa cháy?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Trong môi trường nguy hiểm cháy, nổ xuất hiện nguồn lửa, nguồn nhiệt hoặc khi đang có nguồn lửa, nguồn nhiệt mà xuất hiện môi trường nguy hiểm cháy, nổ (sau đây gọi là nguy cơ trực tiếp phát sinh cháy, nổ).", image: "" },
            { text: "Vi phạm quy định về phòng cháy và chữa cháy nếu không được ngăn chặn kịp thời thì có thể dẫn đến nguy cơ trực tiếp phát sinh cháy, nổ và có thể gây hậu quả đặc biệt nghiêm trọng.", image: "" },
            { text: "Vi phạm quy định về phòng cháy và chữa cháy đã được cơ quan Cảnh sát phòng cháy và chữa cháy yêu cầu khắc phục mà không khắc phục hoặc đã bị xử phạt vi phạm hành chính về phòng cháy và chữa cháy mà tiếp tục vi phạm.", image: "" },
            { text: "Cả a, b, c", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "C6FF59AD",
        question: "Anh/chị hãy cho biết hành vi nào bị nghiêm cấm theo Điều 13, Luật phòng cháy và chữa cháy?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Báo cháy giả", image: "" },
            { text: "Làm hư hỏng, tự ý thay đổi, di chuyển phương tiện, thiết bị phòng cháy và chữa cháy, biển báo, biển chỉ dẫn và lối thoát nạn", image: "" },
            { text: "Làm hư hỏng các trang thiết bị phòng cháy và chữa cháy", image: "" },
            { text: "Cả a và b", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "52A28A58",
        question: "Anh, chị hãy cho biết hành vi nào sau đây là vi phạm các quy định về PCCC?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Gọi điện thoại khi đang đổ xăng", image: "" },
            { text: "Không trang bị bình chữa cháy tại nhà ở", image: "" },
            { text: "Khoá, chèn, chặn cửa thoát nạn", image: "" },
            { text: "Cả a và c", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "0EF051D3",
        question: "Nhà Văn phòng, khách sạn, Nhà nghỉ cao 5 tầng có thuộc diện phải thẩm duyệt về PCCC?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Có", image: "" },
            { text: "Không", image: "" },
            { text: "Không có trong quy định nào; tùy nhu cầu của Văn phòng, khách sạn, Nhà nghỉ", image: "" },
            { text: "Chỉ có khách sạn, Nhà nghỉ là thuộc diện phải thẩm duyệt về PCCC.", image: "" }
        ],
        correct: 0
    },
    {
        question_id: "8FD413A0",
        question: "Cơ sở như thế nào phải mua bảo hiểm cháy nổ bắt buộc?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Hộ gia đình", image: "" },
            { text: "Phương tiện giao thông cơ giới", image: "" },
            { text: "Người dân", image: "" },
            { text: "Cơ sở có nguy hiểm về cháy, nổ", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "46FC4F36",
        question: "Cơ sở sản xuất và kinh doanh hóa chất nguy hiểm về cháy, nổ với diện tích 1000m2 có phải xây dựng phương án chữa cháy không?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Có", image: "" },
            { text: "Không", image: "" },
            { text: "Tùy vào nhu cầu của các cơ sở", image: "" },
            { text: "Cơ sở sản xuất và kinh doanh hóa chất nguy hiểm về cháy, nổ với diện tích trên 2000m2 mới cần phải xây dựng phương án chữa cháy", image: "" }
        ],
        correct: 0
    },
    {
        question_id: "BA4C6E1E",
        question: "Công dân từ bao nhiêu tuổi trở lên, đủ sức khoẻ có trách nhiệm tham gia vào đội dân phòng, đội phòng cháy và chữa cháy cơ sở được lập ở nơi cư trú hoặc nơi làm việc khi có yêu cầu?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "16 tuổi", image: "" },
            { text: "17 tuổi", image: "" },
            { text: "18 tuổi", image: "" },
            { text: "19 tuổi", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "7D9A5547",
        question: "Bình chữa cháy có ký hiệu MT5 là bình chữa cháy loại gì?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Loại bột 5kg.", image: "" },
            { text: "Loại khí 5kg.", image: "" },
            { text: "Loại bột 50kg.", image: "" },
            { text: "Loại khí 50kg.", image: "" }
        ],
        correct: 1
    },
    {
        question_id: "CA7C5684",
        question: "Bình chữa cháy có ký hiệu MT3 là bình chữa cháy loại gì?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Loại bột 5kg.", image: "" },
            { text: "Loại khí 5kg.", image: "" },
            { text: "Loại bột 3kg.", image: "" },
            { text: "Loại khí 3kg.", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "B5E281DA",
        question: "Bình chữa cháy có ký hiệu MFZ5 là bình chữa cháy loại gì?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Loại bột 5kg.", image: "" },
            { text: "Loại khí 5kg.", image: "" },
            { text: "Loại bột 3kg.", image: "" },
            { text: "Loại khí 3kg.", image: "" }
        ],
        correct: 0
    },
    {
        question_id: "2444C8FA",
        question: "Bình chữa cháy có ký hiệu MFZ3 là bình chữa cháy loại gì?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Loại bột 5kg.", image: "" },
            { text: "Loại khí 5kg.", image: "" },
            { text: "Loại bột 3kg.", image: "" },
            { text: "Loại khí 3kg.", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "D47DF6A2",
        question: "Cách sử dụng bình chữa cháy bằng bột như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Ném cả bình vào đám cháy.", image: "" },
            { text: "Lắc bình, rút chốt, hướng loa phun vào ngọn lửa, bóp cò.", image: "" },
            { text: "Đứng tại chỗ phun chất chữa cháy.", image: "" },
            { text: "Cả a, b, c đều đúng.", image: "" }
        ],
        correct: 1
    },
    {
        question_id: "7208A379",
        question: "Bình chữa cháy bằng bột chữa cháy không hiệu quả đối với đám cháy nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Chất rắn", image: "" },
            { text: "Chất lỏng", image: "" },
            { text: "Chất khí.", image: "" },
            { text: "Các kim loại đang nóng đỏ và thiết bị điện tử", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "F3D84BF5",
        question: "Bình chữa cháy bằng khí chữa cháy hiệu quả ở khu vực nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Ngoài trời", image: "" },
            { text: "Nơi có gió", image: "" },
            { text: "Nơi kín gió", image: "" },
            { text: "Tất cả các đáp án trên", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "C0DCDE56",
        question: "Anh/chị hãy cho biết kiểm tra an toàn về phòng cháy và chữa cháy gồm những nội dung nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Điều kiện an toàn về phòng cháy và chữa cháy của cơ sở, khu dân cư, hộ gia đình, rừng, phương tiện giao thông cơ giới theo quy định của Luật Phòng cháy và chữa cháy, Nghị định này và các quy định của pháp luật có liên quan.", image: "" },
            { text: "Việc thực hiện trách nhiệm phòng cháy và chữa cháy của từng đối tượng quy định tại Luật Phòng cháy và chữa cháy, Nghị định này và các quy định của pháp luật có liên quan.", image: "" },
            { text: "Việc chấp hành các quy định của Luật Phòng cháy và chữa cháy, Nghị định này, tiêu chuẩn, quy chuẩn kỹ thuật, các quy định của pháp luật có liên quan và các yêu cầu về phòng cháy và chữa cháy của cơ quan", image: "" },
            { text: "Cả a, b, c", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "B77CA9E5",
        question: "Khi có cháy xảy ra do điện, đầu tiên, ta phải làm gì?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Báo động cho mọi người xung quanh biết, đồng thời gọi điện thoại thông báo cho lực lượng Cảnh sát PCCC qua số 114.", image: "" },
            { text: "Ngắt cầu dao diện.", image: "" },
            { text: "Nhanh chóng dùng phương tiện chữa cháy tại chỗ để chữa cháy.", image: "" },
            { text: "Tất cả đều đúng.", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "D2481477",
        question: "Các biện pháp phòng cháy điện trong hộ gia đình?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Không dùng các thiết bị, dụng cụ tiêu thụ điện kém chất lượng, không rõ nguồn gốc.", image: "" },
            { text: "Không đặt các chất gây cháy (gas, xăng, dầu, giấy,…) gần các thiết bị, dụng cụ tiêu thụ điện; Không lắp đặt ổ cắm điện trong phòng vệ sinh, phòng tắm vì dễ gây chạm điện do độ ẩm cao.", image: "" },
            { text: "Khi đun nấu bếp điện phải có người trông coi; Không để trẻ nhỏ, người bị bệnh tâm thần,… sử dụng các thiết bị điện, đồ dùng điện trong nhà.", image: "" },
            { text: "Tất cả đều đúng.", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "C886F35F",
        question: "Để đảm bảo an toàn khi sử dụng khí gas trong gia đình, anh/chị sẽ phải làm gì?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Khóa van an toàn sau mỗi lần sử dụng.", image: "" },
            { text: "Thường xuyên vệ sinh bếp và khu vực nấu ăn.", image: "" },
            { text: "Trang bị thiết bị cảnh báo rò rỉ khí gas.", image: "" },
            { text: "Cả a, b, c đều đúng.", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "67CA6559",
        question: "Luật PCCC quy định một trong những biện pháp cơ bản đầu tiên trong công tác phòng cháy là gì?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Sử dụng an toàn các chất cháy, chất nổ, nguồn lửa nguồn nhiệt, thiết bị và dụng cụ sinh lửa, sinh nhiệt, chất sinh lửa, sinh nhiệt.", image: "" },
            { text: "Quản lý chặt chẽ về sử dụng an toàn các chất cháy, chất nổ, nguồn lửa nguồn nhiệt; đảm bảo các điều kiện an toàn trong sản xuất kinh doanh.", image: "" },
            { text: "Quản lý chặt chẽ và sử dụng an toàn các chất cháy, chất nổ, nguồn lửa nguồn nhiệt, thiết bị và dụng cụ sinh lửa, sinh nhiệt, chất sinh lửa, sinh nhiệt; đảm bảo các điều kiện an toàn về phòng cháy.", image: "" },
            { text: "Định kỳ tự tổ chức kiểm tra công tác an toàn PCCC.", image: "" }
        ],
        correct: 2
    },
    {
        question_id: "B0B3A0FE",
        question: "Khi ngửi thấy mùi khét, khói hoặc thấy lửa thì gọi cho lực lượng nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Khi ngửi thấy mùi khét, khói hoặc thấy lửa thì gọi ngay cho lực lượng PCCC, qua số 114.", image: "" },
            { text: "Khi ngửi thấy mùi khét, khói hoặc thấy lửa thì gọi ngay cho lực lượng PCCC, qua số 113.", image: "" },
            { text: "Khi ngửi thấy mùi khét, khói hoặc thấy lửa thì gọi ngay cho UBND Phường.", image: "" },
            { text: "Cả a,b,c đều đúng", image: "" }
        ],
        correct: 0
    },
    {
        question_id: "6872F4B8",
        question: "Khi nào thì nên kiểm tra định kỳ bình cứu hỏa, khi nào thì nạp bình cứu hỏa?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Cứ sau 6 tháng các bạn nên kiểm tra định kỳ bình cứu hỏa hay các dụng cụ phòng cháy chữa cháy khác,bạn nên nhớ không nên bỏ qua bất cứ một thiết bị nào, vì thiết bị nào cũng có tầm ảnh hưởng, tác dụng liên quan đến dập tắt đám cháy. Nếu như, vạch kim bình cứu hỏa không ở mốc xanh nữa nghĩa là bạn phải đi nạp bình cứu hỏa hoặc sạc bình chữa cháy để đảm bảo an toàn và có thể đảm bảo trong quá trình hoạt động.", image: "" },
            { text: "Cứ sau 1 năm các bạn nên kiểm tra định kỳ bình cứu hỏa hay các dụng cụ phòng cháy chữa cháy khác,bạn nên nhớ không nên bỏ qua bất cứ một thiết bị nào, vì thiết bị nào cũng có tầm ảnh hưởng, tác dụng liên quan đến dập tắt đám cháy. Nếu như, vạch kim bình cứu hỏa không ở mốc xanh nữa nghĩa là bạn phải đi nạp bình cứu hỏa hoặc sạc bình chữa cháy để đảm bảo an toàn và có thể đảm bảo trong quá trình hoạt động.", image: "" },
            { text: "Cứ sau 2 năm các bạn nên kiểm tra định kỳ bình cứu hỏa hay các dụng cụ phòng cháy chữa cháy khác,bạn nên nhớ không nên bỏ qua bất cứ một thiết bị nào, vì thiết bị nào cũng có tầm ảnh hưởng. Nếu như, vạch kim bình cứu hỏa không ở mốc xanh nữa nghĩa là bạn phải đi nạp bình cứu hỏa hoặc sạc bình chữa cháy để đảm bảo an toàn và có thể đảm bảo trong quá trình hoạt động.", image: "" },
            { text: "Câu b và câu c đúng.", image: "" }
        ],
        correct: 0
    },
    {
        question_id: "451F3252",
        question: "Bạn nên để bình chữa cháy ở đâu?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Bạn phải để bình chữa cháy ở một nơi bạn có thể thoát ra, nhìn thấy dễ dàng nhất hoặc bạn nên lắp nó gần lối thoát hiểm, trên tầm với của trẻ em để có thể dám chắc được ai cũng có thể sử dụng.", image: "" },
            { text: "Bạn phải để bình chữa cháy ở một nơi cao, để có thể dám chắc trẻ em không với tới lấy được.", image: "" },
            { text: "Bạn phải cất bình chữa cháy ở một nơi kín đáo, để bảo quản một cách tốt nhất", image: "" },
            { text: "Câu a và b đúng", image: "" }
        ],
        correct: 0
    },
    {
        question_id: "2958864A",
        question: "Khi ngoài cửa căn hộ đã bị bao vây bởi lửa không thể thoát ra ngoài, bạn làm thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Ở yên trong phòng, chờ người đến cứu.", image: "" },
            { text: "Khi ngoài cửa căn hộ đã bị bao vây bởi lửa không thể thoát ra ngoài, bạn nên nhanh chóng thoát ra chỗ thoáng như ban công, sân thượng; dùng các thiết bị chuyên dụng để thoát hiểm; tuyệt đối không nhảy từ cửa sổ, ban công trên cao xuống; chỉ cần xuống dưới tầng bị cháy rồi từ đó dùng thang bộ đi xuống nơi an toàn.", image: "" },
            { text: "Dùng mền thấm nước, phủ khắp người, chạy thoát ra ngoài.", image: "" },
            { text: "Nhanh chóng thoát ra chỗ thoáng như ban công, sân thượng; dùng các thiết bị chuyên dụng để thoát hiểm; nhảy từ cửa sổ, ban công xuống đất.", image: "" }
        ],
        correct: 1
    },
    {
        question_id: "57705BEE",
        question: "Với trường hợp đám cháy không xuất hiện ở phòng, tầng của mình. Việc đầu tiên các bạn cần phải làm gì?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Ở yên trong phòng", image: "" },
            { text: "Xác định vị trí của ngọn lửa và nguồn khói. Trong trường hợp luồng khói từ trên cao, hoặc ngay trong tầng của bạn, hãy nhanh chóng di chuyển ra cửa thoát hiểm và chạy thoát xuống các tầng dưới. Không sử dụng thang máy là khuyến cáo trong các trường hợp hỏa hoạn. Nếu khói xuất phát từ tầng dưới, bạn hãy tìm cách di chuyển ngược lên trên tầng thượng, vì di chuyển trong môi trường dày đặc khói quá lâu sẽ khiến bạn gục ngã trước khi thoát. Nhiều tòa nhà luôn khóa cửa ở tầng thượng thì không nên di chuyển lên trên bởi nếu lối thang bộ bị nhiễm khói, đây là nơi tập trung khói bay lên.", image: "" },
            { text: "Xác định vị trí của ngọn lửa và nguồn khói. Trong trường hợp luồng khói từ trên cao, hoặc ngay trong tầng của bạn, hãy nhanh chóng di chuyển ra thang máy và chạy thoát xuống các tầng dưới. Nếu khói xuất phát từ tầng dưới, bạn hãy tìm cách di chuyển ngược lên trên tầng thượng, vì di chuyển trong môi trường dày đặc khói quá lâu sẽ khiến bạn gục ngã trước khi thoát. Nhiều tòa nhà luôn khóa cửa ở tầng thượng thì không nên di chuyển lên trên bởi nếu lối thang bộ bị nhiễm khói, đây là nơi tập trung khói bay lên.", image: "" },
            { text: "Xác định vị trí của ngọn lửa và nguồn khói. Trong trường hợp luồng khói từ trên cao, hoặc ngay trong tầng của bạn, hãy nhanh chóng di chuyển ra thang máy và chạy thoát xuống các tầng dưới. Nếu khói xuất phát từ tầng dưới, bạn hãy tìm cách di chuyển thật nhanh ra ngoài.", image: "" }
        ],
        correct: 1
    },
    {
        question_id: "9B1F03F0",
        question: "Phương tiện PCCC gồm những loại phương tiện nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Bình chữa cháy", image: "" },
            { text: "Hệ thống báo cháy tự động", image: "" },
            { text: "Hệ thống chữa cháy tự động", image: "" },
            { text: "Phương tiện cơ giới, máy móc, thiết bị, dụng cụ, hóa chất, công cụ hỗ trợ, phương tiện thô sơ chuyên dùng cho việc phòng cháy và chữa cháy, cứu người, cứu tài sản.", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "72364F3C",
        question: "Là người đứng đầu một cơ sở khi để xảy ra cháy, nổ tại cơ sở mình thì người đó phải chịu hình thức xử lý như thế nào?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Xử lý hình sự", image: "" },
            { text: "Phạt tiền", image: "" },
            { text: "Không bị gì", image: "" },
            { text: "Tùy từng mức độ thiệt hại cụ thể mà người đứng đầu cơ sở có thể bị phạt tiền hoặc truy cứu trách nhiệm hình sự.", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "710BE581",
        question: "Các hành vi bị nghiêm cấm theo quy định của Luật PCCC?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Cố ý gây cháy, nổ làm tổn hại đến tính mạng, sức khoẻ con người; gây thiệt hại tài sản của Nhà nước, cơ quan, tổ chức, cá nhân; ảnh hưởng xấu đến môi trường, an ninh và trật tự an toàn xã hội.", image: "" },
            { text: "Cản trở các hoạt động phòng cháy và chữa cháy; chống người thi hành nhiệm vụ phòng cháy và chữa cháy.", image: "" },
            { text: "Lợi dụng hoạt động phòng cháy và chữa cháy để xâm hại đến tính mạng, sức khoẻ con người; xâm phạm tài sản của Nhà nước, cơ quan, tổ chức và cá nhân.", image: "" },
            { text: "Cả a, b, c đều đúng.", image: "" }
        ],
        correct: 3
    },
    {
        question_id: "9DF6C90D",
        question: "Trách nhiệm phòng cháy và chữa cháy là của ai?",
        image: "",
        cssClass: "w-100",
        options: [
            { text: "Cảnh sát PCCC", image: "" },
            { text: "Lực lượng dân phòng", image: "" },
            { text: "Lực lượng PCCC chuyên ngành", image: "" },
            { text: "Mỗi cơ quan, tổ chức, hộ gia đình và cá nhân", image: "" }
        ],
        correct: 3
    }
];