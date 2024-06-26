# 購物網站暨二手交易平台
## 專案介紹
本專案為了響應環保議題，提供使用者一個方便進行二手物品買賣、以物易物的線上平台。除了基本的商品展示、購物車、訂單管理等功能外，還特別加入了類似競標的功能。
## 使用技術
- **前端**：使用 Next.js 框架進行開發，並使用 Sass 和 Bootstrap 進行樣式設計。
- **後端**：使用 Node.js 和 Express 框架建立後端服務，並使用 MySQL 作為資料庫。
- **版本控制**：使用 Git 進行版本控制。
## 主要功能
- **會員系統**：提供基本的登入、登出、註冊功能，並使用 JWT 進行資料交換。會員可以在會員中心更新個人資料和大頭貼。忘記密碼時，系統會透過 OTP 進行驗證。此外，還提供 Google 第三方登入（透過 Firebase）以及即時聊天室（透過 socket.io）的功能。
- **產品系統**：提供基本的產品 CRUD 功能，並支援產品搜尋和篩選。此外，還有一個隨機挑選的小互動功能。
- **訂單系統**：用戶可以將喜歡的產品加入收藏或購物車，並可以透過 Line Pay 進行結帳。購買完成後，用戶可以對產品進行評價。
- **使用者後台系統**：由於平台涵蓋買賣雙方，每個使用者都有自己的後台，可以進行商品的上架和管理等操作。
## 開發過程與註解
這是一個時間較為緊迫的多人協作專案，因此在程式碼風格上可能會有一些不統一的地方，我們對此表示歉意。我們將持續學習並改進我們的協作流程，以提升程式碼的一致性和可讀性。在後端的 Express 部分，我們嘗試了多種不同的方法來實現功能，這可能會使程式碼看起來有些混亂，但我們相信這是我們學習和成長的過程，也期待能從中獲得你的寶貴意見。
