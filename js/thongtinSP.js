const detailContainer = document.querySelector('.content');


const getDetailProduct = async() => {
    const path = new URLSearchParams(window.location.search);

    const productId = path.get('id')

    const response = await fetch('data.json');

    const data = await response.json();

    const findProductId = data.find(item => item.id.toString() === productId.toString())

    detailContainer.innerHTML = `
        <div class="content-left">
            <section>
                <img src="${findProductId.img}" alt="${findProductId.title}" width="80%">
            </section>
        </div>
        <div class="content-right">
            <aside>
                <div class="ten">
                    <strong>${findProductId.title}</strong>
                </div>
                <div class="mota">
                    ${productId.description}
                </div>
                <div class="price">
                    ${productId.price}
                </div>
            </aside>
        </div>
        <footer>
            <a href="gioHang.html">
                <button>Thêm vào giỏ</button>
            </a>
            
        </footer>
    `
    console.log(findProductId)
}
getDetailProduct();