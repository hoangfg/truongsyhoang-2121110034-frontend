export const validateProduct = (data) => {
    var errorMSG = "";
    if(data.productName === '') errorMSG+='Bạn cần nhập tên cho sản phẩm <br/>'
    if (data.category === '') errorMSG += 'Bạn cần chọn 1 danh mục<br/>'
    if (data.brand === '') errorMSG += 'Bạn cần chọn 1 thương hiệu<br/>'
    if (data.price === '') errorMSG += 'Bạn cần nhập giá<br/>'
    if (data.price < 1000) errorMSG += 'Giá phải lớn hơn 1.000đ<br/>'
    if (data.description === '') errorMSG += 'Bạn cần nhập mô ta cho sản phẩm <br/>'
    if (data.detail === '') errorMSG += 'Bạn cần nhập chi tiết cho sản phẩm <br/>'
    if(data.image[0] === '') errorMSG +='Cần ít nhất 2 hình ảnh'
    if(data.image[1] === '') errorMSG +='Cần ít nhất 2 hình ảnh'

    return errorMSG;
}   