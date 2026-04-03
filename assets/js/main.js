// main.js - 共用的手機版選單邏輯
document.addEventListener('DOMContentLoaded', () => {
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileIcon = document.getElementById('mobile-menu-icon');

    if (mobileBtn && mobileMenu && mobileIcon) {
        mobileBtn.addEventListener('click', () => {
            // 切換隱藏/顯示狀態
            mobileMenu.classList.toggle('hidden');
            
            // 讓圖示在「漢堡 (三條線)」與「打叉 (X)」之間變形
            if (mobileMenu.classList.contains('hidden')) {
                mobileIcon.classList.replace('fa-xmark', 'fa-bars');
            } else {
                mobileIcon.classList.replace('fa-bars', 'fa-xmark');
            }
        });
    }
});
