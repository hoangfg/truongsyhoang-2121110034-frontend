export const validateProduct = (data) => {
    var errorMSG = "";
    if(data.productName === '') errorMSG+='Bạn cần nhập tên cho sản phẩm \n'
    if (data.category === '') errorMSG += 'Bạn cần chọn 1 danh mục\n'
    if (data.brand === '') errorMSG += 'Bạn cần chọn 1 thương hiệu\n'
    if (data.price === '') errorMSG += 'Bạn cần nhập giá\n'
    if (data.price < 1000) errorMSG += 'Giá phải lớn hơn 1.000đ\n'
    if (data.description === '') errorMSG += 'Bạn cần nhập mô ta cho sản phẩm \n'
    if (data.detail === '') errorMSG += 'Bạn cần nhập chi tiết cho sản phẩm \n'
    if(data.image[0] === '') errorMSG +='Cần ít nhất 2 hình ảnh'
    if(data.image[1] === '') errorMSG +='Cần ít nhất 2 hình ảnh'

    return errorMSG;
}   