// Git协作学习项目 - 主JavaScript文件
console.log('Git协作学习项目已加载');

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    console.log('页面DOM加载完成');
    
    // 初始化项目
    initProject();
});

// 项目初始化函数
function initProject() {
    console.log('项目初始化中...');
    
    // 显示欢迎信息
    showWelcomeMessage();
    
    // 设置页面交互
    setupInteractions();
}

// 显示欢迎信息
function showWelcomeMessage() {
    const mainContent = document.getElementById('main-content');
    if (mainContent) {
        console.log('欢迎来到Git协作演示项目！');
    }
}

// 设置页面交互
function setupInteractions() {
    // 为功能列表添加点击效果
    const featureItems = document.querySelectorAll('#feature-list li');
    featureItems.forEach(item => {
        item.addEventListener('click', function() {
            this.style.backgroundColor = '#3498db';
            this.style.color = 'white';
            setTimeout(() => {
                this.style.backgroundColor = '';
                this.style.color = '';
            }, 1000);
        });
    });
}

// 工具函数
const utils = {
    // 格式化日期
    formatDate: function(date) {
        return date.toLocaleDateString('zh-CN');
    },
    
    // 显示当前时间
    showCurrentTime: function() {
        const now = new Date();
        console.log('当前时间：', this.formatDate(now));
    }
};

// 导出工具函数（如果需要在其他文件中使用）
if (typeof module !== 'undefined' && module.exports) {
    module.exports = utils;
}
