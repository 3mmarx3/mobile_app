let header = document.getElementById("header");

const currentPath = window.location.pathname;
const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1);

const headerContent = `
    <div class="sidebar" id="sidebar">
        <div class="logo"> القمه للتجاره والتوزيع</div>
        
        <a href="/index.html" data-page="dashboard" class="${currentPage === 'index.html' || currentPage === '' ? 'active' : ''}">
            <i class="fas fa-tachometer-alt"></i> لوحة التحكم
        </a>
        <a href="../page/product.html" data-page="products" class="${currentPage === 'product.html' ? 'active' : ''}">
            <i class="fas fa-box-open"></i> المنتجات
        </a>
        <a href="../page/Categories.html" data-page="categories" class="${currentPage === 'Categories.html' ? 'active' : ''}">
            <i class="fas fa-folder-open"></i> الفئات
        </a>
        <a href="../page/orders.html" data-page="orders" class="${currentPage === 'orders.html' ? 'active' : ''}">
            <i class="fas fa-shopping-cart"></i> الطلبات
        </a>
        <a href="../page/Users.html" data-page="users" class="${currentPage === 'Users.html' ? 'active' : ''}">
            <i class="fas fa-users"></i> المستخدمين
        </a>
        
        <hr style="margin: 2rem 1.5rem; border-color: #334155" />
        
        <a href="/auth/login.html" onclick="logout()">
            <i class="fas fa-sign-out-alt"></i> تسجيل الخروج
        </a>
    </div>`;

header.innerHTML = headerContent;