function header(){
    return `<div class="upper">
        <div id="burger"></div>
        <a href ="index.html"><div id="logo"></div></a>
        <div id="searchdiv"><input type="text" id="search5"
                placeholder="Search essentials, groceries, and more ..."><span id="searchburger"></span></div>
        <div id="accdiv"><a id="si_btn" style="color:white; text-decoration:none; cursor:pointer; display: flex; gap: 5px;
        align-items: center;" href="signin.html"><span id="account"></span><span id="acctext">Sign in / Sign up</span></a></div>
        <div id="cartdiv"><a style="color:white; cursor:pointer; text-decoration:none;" href="card.html"><span id="cart"></a></span id="carttext"><a style="color:white; cursor:pointer; text-decoration:none;" href="card.html"><span id="cartspan">Cart</span></a><span id="cart_counter">0</span>
        </div>
    </div>
    <div class="lower">
        <div id="location">
            <span id="location_logo"></span>
            <div>
                <p id="deltext">Deliver to</p>
                <p id="pin"></p>
            </div>
        </div>
        <div id="one" class="bottom_links"><a style="color:black; text-decoration:none;" href="selection.html"><span>Groceries</span></a><span class="down_arrow"></span>
            <div id="d1" class="ddown">
                <div>
                    <a href="selection.html">Fruits & Vegetables</a>
                    <a href="selection.html">Dairy & Bakery</a>
                    <a href="selection.html">Staples</a>
                    <a href="selection.html">Snacks & Branded Foods</a>
                    <a href="selection.html">Beverages</a>
                    <a href="selection.html">Personal Care</a>
                </div>
                <div>
                    <a href="selection.html">Home Care</a>
                    <a href="selection.html">Home & Kitchen</a>
                    <a href="selection.html">Mom & Baby Care</a>
                    <a href="selection.html">Books</a>
                    <a href="selection.html">Pets</a>
                </div>
            </div>
        </div>

        <div id="two" class="bottom_links"><span>Home & Kitchen</span><span class="down_arrow"></span>
            <div id="d2" class="ddown">
                <div>
                    <a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a
                        href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a
                        href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a>
                </div>
                <div>
                    <a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a
                        href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a
                        href="">Jio Mart</a><a href="">Jio Mart</a>
                </div>
            </div>
        </div>
        <div id="three" class="bottom_links"><span>Fashion</span><span class="down_arrow"></span>
            <div id="d3" class="ddown">
                <div>
                    <a href="">Jio Mart</a>
                    <a href="">Jio Mart</a>
                    <a href="">Jio Mart</a>
                </div>
                <div>
                    <a href="">Jio Mart</a>
                    <a href="">Jio Mart</a>
                    <a href="">Jio Mart</a>
                </div>
            </div>
        </div>
        <div id="four" class="bottom_links"><span>Electronics</span><span class="down_arrow"></span>
            <div id="d4" class="ddown">
                <a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a
                    href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a
                    href="">Jio Mart</a><a href="">Jio Mart</a>
            </div>
        </div>
        <div id="five" class="bottom_links"><span>Beauty</span><span class="down_arrow"></span>
            <div id="d5" class="ddown">
                <a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a
                    href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a href="">Jio Mart</a><a
                    href="">Jio Mart</a><a href="">Jio Mart</a>
            </div>
        </div>
        <div id="six" class="bottom_links"><span>Jewellery</span><span class="down_arrow"></span>
            <div id="d6" class="ddown">
                <a href="">Jio Mart</a>
            </div>
        </div>
    </div>`;
}

export default header;