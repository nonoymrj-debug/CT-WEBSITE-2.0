const SUPABASE_URL = 'https://sujpdopplexaxgnizvil.supabase.co';
const SUPABASE_KEY = 'sb_publishable__srdeSwL95qHFZLfO2N3WQ_WJSNcB58';
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const DEFAULT_COLUMNS = [
    { id: "written1", name: "Quiz 1", category: "Written" },
    { id: "written2", name: "Quiz 2", category: "Written" },
    { id: "perf1", name: "Project 1", category: "Performance" },
    { id: "perf2", name: "Project 2", category: "Performance" },
    { id: "exam1", name: "Midterm Exam", category: "Exam" },
    { id: "bonus", name: "Bonus Points", category: "Bonus" }
];

const DEFAULT_WEIGHTS = { w: 30, p: 50, e: 20 };
const DEFAULT_CONVERSION_RATE = 10;

const DEFAULT_SHOP_CATEGORIES = [
    {
        id: "cat_regular",
        title: "REGULAR SHOP",
        description: "Feeling normal today?",
        items: [
            { id: 1, name: "Ballpen", price: 40, icon: "🖊️" },
            { id: 2, name: "Eraser", price: 30, icon: "🧹" },
            { id: 3, name: "Pencil", price: 30, icon: "✏️" },
            { id: 4, name: "A4 bond paper (5 pieces)", price: 50, icon: "📄" },
            { id: 5, name: "Intermediate Pad (10 pieces)", price: 120, icon: "📝" },
            { id: 6, name: "1/4 (10 pieces)", price: 20, icon: "📋" },
            { id: 7, name: "Crosswise (10 pieces)", price: 80, icon: "📑" },
            { id: 8, name: "Lengthwise (10 pieces)", price: 95, icon: "📄" },
            { id: 9, name: "Long bond paper (5 pieces)", price: 75, icon: "📜" },
            { id: 10, name: "Short/Letter bond paper (5 pieces)", price: 35, icon: "📄" }
        ]
    },
    {
        id: "cat_snack",
        title: "SNACK SHOP",
        description: "Feeling hungry, are we?",
        items: [
            { id: 11, name: "Lollipop", price: 20, icon: "🍭" },
            { id: 12, name: "Biscuits", price: 60, icon: "🍪" },
            { id: 13, name: "Chips", price: 70, icon: "🍿" }
        ]
    },
    {
        id: "cat_special",
        title: "SPECIAL SHOP",
        description: "Feeling rich today?",
        items: [
            { id: 14, name: "One print (A4, non-colored)", price: 200, icon: "🖨️" },
            { id: 15, name: "One print (A4, colored, normal)", price: 400, icon: "🎨" },
            { id: 16, name: "One print (A4, colored, best)", price: 500, icon: "🖼️" },
            { id: 17, name: "Sign pen", price: 100, icon: "🖋️" }
        ]
    }
];

const DEFAULT_ACCOUNTS = [
    { id: "1111111111", name: "Tester Student 1", group: "Tester", pass: "testpass1", balance: 1500, scores: {written1:90, written2:92, perf1:88, perf2:90, exam1:91, bonus:3}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "2222222222", name: "Tester Student 2", group: "Tester", pass: "testpass2", balance: 2000, scores: {written1:85, written2:88, perf1:86, perf2:89, exam1:87, bonus:1}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "8888888888", name: "Tester Admin Teacher", group: "Admin", pass: "admintest", balance: 99999, isAdmin: true, scores: {}, history:[], inventory:[], privacy: {}, avatar: "" },

    { id: "1208201101", name: "David Aguas", group: "Male", pass: "120801", balance: 1000, scores: {written1:88, written2:90, perf1:89, perf2:91, exam1:85, bonus:2}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0731201102", name: "Jovit Ate", group: "Male", pass: "073102", balance: 1000, scores: {written1:85, written2:87, perf1:85, perf2:87, exam1:84, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0411201203", name: "Tristan Bristol", group: "Male", pass: "041103", balance: 1000, scores: {written1:90, written2:92, perf1:90, perf2:92, exam1:88, bonus:5}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0101201204", name: "Nino Cabasag", group: "Male", pass: "010104", balance: 1000, scores: {written1:84, written2:86, perf1:84, perf2:86, exam1:82, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0220201205", name: "John Callunsag", group: "Male", pass: "022005", balance: 1000, scores: {written1:89, written2:91, perf1:89, perf2:91, exam1:87, bonus:1}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0220201206", name: "Teody Clarin", group: "Male", pass: "022006", balance: 1000, scores: {written1:87, written2:88, perf1:87, perf2:88, exam1:85, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0803201207", name: "Immanuel Ella", group: "Male", pass: "080307", balance: 1000, scores: {written1:91, written2:93, perf1:91, perf2:93, exam1:90, bonus:3}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0414201208", name: "Calix Farre", group: "Male", pass: "041408", balance: 1000, scores: {written1:86, written2:89, perf1:86, perf2:89, exam1:84, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "1112201109", name: "Ethan Kollin", group: "Male", pass: "111209", balance: 1000, scores: {written1:88, written2:88, perf1:88, perf2:88, exam1:86, bonus:2}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0718201110", name: "Jolo Maisog", group: "Male", pass: "071810", balance: 1000, scores: {written1:83, written2:85, perf1:83, perf2:85, exam1:81, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0815201111", name: "Jared Nonoy", group: "Male", pass: "Jard123", balance: 1000, scores: {written1:95, written2:97, perf1:95, perf2:97, exam1:94, bonus:5}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0626201212", name: "Benz Oriño", group: "Male", pass: "062612", balance: 1000, scores: {written1:89, written2:90, perf1:89, perf2:90, exam1:87, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0215201213", name: "Kyle Suarez", group: "Male", pass: "021513", balance: 1000, scores: {written1:87, written2:86, perf1:87, perf2:86, exam1:85, bonus:1}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0531201214", name: "Liam Uba", group: "Male", pass: "053114", balance: 1000, scores: {written1:90, written2:91, perf1:90, perf2:91, exam1:88, bonus:2}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0115201215", name: "Rufz Casinto", group: "Male", pass: "011515", balance: 1000, scores: {written1:88, written2:89, perf1:88, perf2:89, exam1:86, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },

    { id: "0715201116", name: "Charo Aboga-a", group: "Female", pass: "071516", balance: 1000, scores: {written1:92, written2:94, perf1:92, perf2:94, exam1:91, bonus:3}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "1215201117", name: "Ayesha Amer", group: "Female", pass: "121517", balance: 1000, scores: {written1:89, written2:91, perf1:89, perf2:91, exam1:88, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0830201118", name: "Kristine Antiga", group: "Female", pass: "083018", balance: 1000, scores: {written1:90, written2:90, perf1:90, perf2:90, exam1:89, bonus:2}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0913201219", name: "Mia Apao", group: "Female", pass: "091319", balance: 1000, scores: {written1:88, written2:87, perf1:88, perf2:87, exam1:85, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0824201120", name: "Embrace Bandiala", group: "Female", pass: "082420", balance: 1000, scores: {written1:93, written2:95, perf1:93, perf2:95, exam1:92, bonus:4}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0411201221", name: "Janessa Caga-anan", group: "Female", pass: "041121", balance: 1000, scores: {written1:87, written2:89, perf1:87, perf2:89, exam1:85, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0413201222", name: "Veronica Ciano", group: "Female", pass: "041322", balance: 1000, scores: {written1:86, written2:88, perf1:86, perf2:88, exam1:84, bonus:1}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0419201223", name: "Rhea Cirunay", group: "Female", pass: "041923", balance: 1000, scores: {written1:91, written2:92, perf1:91, perf2:92, exam1:90, bonus:2}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0118201224", name: "Joberly Jambo", group: "Female", pass: "011824", balance: 1000, scores: {written1:88, written2:90, perf1:88, perf2:90, exam1:87, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0420201225", name: "Shiloh Lagumbay", group: "Female", pass: "042025", balance: 1000, scores: {written1:90, written2:89, perf1:90, perf2:89, exam1:88, bonus:1}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0104201226", name: "Vrylle Mandao", group: "Female", pass: "010426", balance: 1000, scores: {written1:85, written2:87, perf1:85, perf2:87, exam1:83, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0430201227", name: "Crystallize Manliguez", group: "Female", pass: "043027", balance: 1000, scores: {written1:94, written2:96, perf1:94, perf2:96, exam1:93, bonus:5}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "1104201128", name: "Lee Manan-og", group: "Female", pass: "110428", balance: 1000, scores: {written1:89, written2:90, perf1:89, perf2:90, exam1:87, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "1130201129", name: "Marwa Matundac", group: "Female", pass: "113029", balance: 1000, scores: {written1:87, written2:88, perf1:87, perf2:88, exam1:85, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0924201130", name: "Nica Mutia", group: "Female", pass: "092430", balance: 1000, scores: {written1:92, written2:93, perf1:92, perf2:93, exam1:91, bonus:2}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0813201131", name: "Ceana Oculam", group: "Female", pass: "081331", balance: 1000, scores: {written1:90, written2:91, perf1:90, perf2:91, exam1:89, bonus:1}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0331201232", name: "Shena Oliveros", group: "Female", pass: "033132", balance: 1000, scores: {written1:88, written2:90, perf1:88, perf2:90, exam1:87, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0515201233", name: "Alphyca Osuyos", group: "Female", pass: "051533", balance: 1000, scores: {written1:86, written2:87, perf1:86, perf2:87, exam1:84, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "1230201134", name: "Daniela Pongcol", group: "Female", pass: "123034", balance: 1000, scores: {written1:89, written2:92, perf1:89, perf2:92, exam1:88, bonus:2}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0203201235", name: "Rashiel Samrano", group: "Female", pass: "020335", balance: 1000, scores: {written1:91, written2:93, perf1:91, perf2:93, exam1:90, bonus:3}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "1119201136", name: "Kriselsem Sinajon", group: "Female", pass: "111936", balance: 1000, scores: {written1:87, written2:89, perf1:87, perf2:89, exam1:86, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "1210201137", name: "Chedane Sultan", group: "Female", pass: "121037", balance: 1000, scores: {written1:90, written2:90, perf1:90, perf2:90, exam1:88, bonus:1}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0730201138", name: "Jasmine Tomagna", group: "Female", pass: "073038", balance: 1000, scores: {written1:88, written2:91, perf1:88, perf2:91, exam1:86, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0428201239", name: "Khloe Ungab", group: "Female", pass: "042839", balance: 1000, scores: {written1:85, written2:86, perf1:85, perf2:86, exam1:83, bonus:0}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0831201240", name: "Ashley Vale", group: "Female", pass: "083140", balance: 1000, scores: {written1:92, written2:94, perf1:92, perf2:94, exam1:91, bonus:3}, history:[], inventory:[], privacy: {}, avatar: "" },
    { id: "0910201141", name: "Herald Vidad", group: "Female", pass: "091041", balance: 1000, scores: {written1:89, written2:90, perf1:89, perf2:90, exam1:87, bonus:1}, history:[], inventory:[], privacy: {}, avatar: "" },

    { id: "9999999999", name: "Ma'am Anib", group: "Admin", pass: "admin123", balance: 99999, isAdmin: true, scores: {}, history:[], inventory:[], privacy: {}, avatar: "" }
];

let ACCOUNTS_DATA = [];
let GRADE_COLUMNS = [];
let GRADE_WEIGHTS = {};
let GRADE_CONV_RATE = DEFAULT_CONVERSION_RATE;
let SHOP_CATEGORIES = [];
let AUCTION_STATE = null;
let activeBiddingInterval = null;
let shopEditMode = false;
let currentUser = null;
let cart = {};

function getAllShopItems() {
    return SHOP_CATEGORIES.flatMap(cat => cat.items);
}

function normalizeAccounts(accounts) {
    return accounts.map(acc => {
        if (!acc.group) {
            const def = DEFAULT_ACCOUNTS.find(d => d.id === acc.id);
            acc.group = def ? def.group : (acc.isAdmin ? "Admin" : "Male");
        }
        if (!acc.privacy) acc.privacy = {};
        if (!acc.avatar) acc.avatar = "";
        return acc;
    });
}

async function loadAllData() {
    try {
        const { data, error } = await supabaseClient
            .from('app_data')
            .select('*')
            .eq('id', 1)
            .maybeSingle();

        if (error || !data) {
            ACCOUNTS_DATA = JSON.parse(JSON.stringify(DEFAULT_ACCOUNTS));
            GRADE_COLUMNS = JSON.parse(JSON.stringify(DEFAULT_COLUMNS));
            GRADE_WEIGHTS = JSON.parse(JSON.stringify(DEFAULT_WEIGHTS));
            GRADE_CONV_RATE = DEFAULT_CONVERSION_RATE;
            SHOP_CATEGORIES = JSON.parse(JSON.stringify(DEFAULT_SHOP_CATEGORIES));
            AUCTION_STATE = null;
            await saveAllData();
        } else {
            const rawAccounts = data.accounts && data.accounts.length > 0 ? data.accounts : JSON.parse(JSON.stringify(DEFAULT_ACCOUNTS));
            ACCOUNTS_DATA = normalizeAccounts(rawAccounts);
            GRADE_COLUMNS = data.columns && data.columns.length > 0 ? data.columns : JSON.parse(JSON.stringify(DEFAULT_COLUMNS));
            GRADE_WEIGHTS = data.weights || JSON.parse(JSON.stringify(DEFAULT_WEIGHTS));
            GRADE_CONV_RATE = data.convRate !== undefined ? data.convRate : DEFAULT_CONVERSION_RATE;
            SHOP_CATEGORIES = data.shop_categories && data.shop_categories.length > 0 ? data.shop_categories : JSON.parse(JSON.stringify(DEFAULT_SHOP_CATEGORIES));
            AUCTION_STATE = data.auction || null;
        }
    } catch (err) {
        console.error("Failed to load data from Supabase, using defaults:", err);
        ACCOUNTS_DATA = JSON.parse(JSON.stringify(DEFAULT_ACCOUNTS));
        GRADE_COLUMNS = JSON.parse(JSON.stringify(DEFAULT_COLUMNS));
        GRADE_WEIGHTS = JSON.parse(JSON.stringify(DEFAULT_WEIGHTS));
        GRADE_CONV_RATE = DEFAULT_CONVERSION_RATE;
        SHOP_CATEGORIES = JSON.parse(JSON.stringify(DEFAULT_SHOP_CATEGORIES));
        AUCTION_STATE = null;
    }
}

async function saveAllData() {
    try {
        await supabaseClient
            .from('app_data')
            .upsert({
                id: 1,
                accounts: ACCOUNTS_DATA,
                columns: GRADE_COLUMNS,
                weights: GRADE_WEIGHTS,
                convRate: GRADE_CONV_RATE,
                shop_categories: SHOP_CATEGORIES,
                auction: AUCTION_STATE
            });
    } catch (err) {
        console.error("Failed to save data to Supabase:", err);
    }
}

supabaseClient
    .channel('app_data_changes')
    .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'app_data', filter: 'id=eq.1' },
        (payload) => {
            const updated = payload.new;
            if (!updated) return;

            if (updated.accounts) ACCOUNTS_DATA = normalizeAccounts(updated.accounts);
            GRADE_COLUMNS = updated.columns || GRADE_COLUMNS;
            GRADE_WEIGHTS = updated.weights || GRADE_WEIGHTS;
            GRADE_CONV_RATE = updated.convRate !== undefined ? updated.convRate : GRADE_CONV_RATE;
            if (updated.shop_categories) SHOP_CATEGORIES = updated.shop_categories;
            AUCTION_STATE = updated.auction || null;

            if (currentUser) {
                updateUserDisplays();
                handleAuctionRealtimeSync();
            }
            renderShopItems();
            renderGradebookSheet();
            populateDirectory();
        }
    )
    .subscribe();

async function resetAllData() {
    if (confirm("Reset all system data, shop items, avatars, passwords, grades, and receipts in Supabase?")) {
        try {
            ACCOUNTS_DATA = JSON.parse(JSON.stringify(DEFAULT_ACCOUNTS));
            GRADE_COLUMNS = JSON.parse(JSON.stringify(DEFAULT_COLUMNS));
            GRADE_WEIGHTS = JSON.parse(JSON.stringify(DEFAULT_WEIGHTS));
            GRADE_CONV_RATE = DEFAULT_CONVERSION_RATE;
            SHOP_CATEGORIES = JSON.parse(JSON.stringify(DEFAULT_SHOP_CATEGORIES));
            AUCTION_STATE = null;

            await saveAllData();
            if (currentUser) {
                currentUser = ACCOUNTS_DATA.find(acc => acc.id === currentUser.id) || null;
            }
            initApp();
            showAlert("System fully reset to default.", "success");
        } catch (err) {
            showAlert("Failed to reset system data.", "danger");
        }
    }
}

async function handleProfileImageUpload(e) {
    const file = e.target.files[0];
    if (!file || !currentUser) return;

    if (file.size > 800000) {
        showAlert('Image file is too large! Please choose an image under 800KB.', 'danger');
        return;
    }

    const reader = new FileReader();
    reader.onload = async function(uploadEvent) {
        currentUser.avatar = uploadEvent.target.result;
        await saveAllData();
        updateUserDisplays();
        showAlert('Profile picture updated successfully!', 'success');
    };
    reader.readAsDataURL(file);
}

function toggleShopEditMode() {
    shopEditMode = !shopEditMode;
    const editorPanel = document.getElementById('adminShopEditorPanel');
    if (shopEditMode) {
        editorPanel.classList.remove('hidden');
        populateShopCategoryDropdown();
    } else {
        editorPanel.classList.add('hidden');
    }
    renderShopItems();
}

function populateShopCategoryDropdown() {
    const select = document.getElementById('newItemCategorySelect');
    if (!select) return;
    select.innerHTML = SHOP_CATEGORIES.map((cat, idx) => `<option value="${idx}">${cat.title}</option>`).join('');
}

async function handleAddShopCategory(e) {
    e.preventDefault();
    const title = document.getElementById('newCatTitle').value.trim().toUpperCase();
    const desc = document.getElementById('newCatDesc').value.trim();
    if (!title) return;
    SHOP_CATEGORIES.push({ id: 'cat_' + Date.now(), title: title, description: desc || "Custom category", items: [] });
    await saveAllData();
    document.getElementById('newCatTitle').value = '';
    document.getElementById('newCatDesc').value = '';
    populateShopCategoryDropdown();
    renderShopItems();
    showAlert(`Category "${title}" added!`, 'success');
}

async function deleteShopCategory(catIdx) {
    const cat = SHOP_CATEGORIES[catIdx];
    if (!cat) return;
    if (confirm(`Delete category "${cat.title}" and its items?`)) {
        SHOP_CATEGORIES.splice(catIdx, 1);
        await saveAllData();
        populateShopCategoryDropdown();
        renderShopItems();
        showAlert(`Category "${cat.title}" removed.`, 'success');
    }
}

async function handleAddShopItem(e) {
    e.preventDefault();
    const catIdx = parseInt(document.getElementById('newItemCategorySelect').value);
    const icon = document.getElementById('newItemIcon').value.trim() || "🛍️";
    const name = document.getElementById('newItemName').value.trim();
    const price = parseFloat(document.getElementById('newItemPrice').value);

    if (isNaN(catIdx) || !SHOP_CATEGORIES[catIdx] || !name || isNaN(price) || price < 1) {
        showAlert('Please fill out valid item details.', 'danger');
        return;
    }

    SHOP_CATEGORIES[catIdx].items.push({ id: Date.now(), name: name, price: price, icon: icon });
    await saveAllData();
    document.getElementById('newItemName').value = '';
    document.getElementById('newItemPrice').value = '';
    renderShopItems();
    showAlert(`Added "${name}" (${price} FARADS)!`, 'success');
}

async function updateShopItemPrice(catIdx, itemIdx, newPriceVal) {
    const price = parseFloat(newPriceVal);
    if (isNaN(price) || price < 0) {
        showAlert('Invalid price entered.', 'danger');
        renderShopItems();
        return;
    }
    SHOP_CATEGORIES[catIdx].items[itemIdx].price = price;
    await saveAllData();
    renderShopItems();
    showAlert(`Price updated to ${price} FARADS!`, 'success');
}

async function deleteShopItem(catIdx, itemIdx) {
    const item = SHOP_CATEGORIES[catIdx]?.items[itemIdx];
    if (!item) return;
    if (confirm(`Remove "${item.name}" from store?`)) {
        SHOP_CATEGORIES[catIdx].items.splice(itemIdx, 1);
        delete cart[item.id];
        renderCart();
        await saveAllData();
        renderShopItems();
        showAlert(`Removed "${item.name}".`, 'success');
    }
}

async function handleCreateAuction(e) {
    e.preventDefault();
    const itemName = document.getElementById('auctionItemName').value.trim();
    const startPrice = parseFloat(document.getElementById('auctionStartPrice').value);

    if (!itemName || isNaN(startPrice) || startPrice < 1) {
        showAlert('Please provide a valid item name and starting price.', 'danger');
        return;
    }

    AUCTION_STATE = {
        status: 'waiting',
        itemName: itemName,
        currentBid: startPrice,
        highestBidderId: null,
        highestBidderName: 'None',
        participants: [],
        declined: [],
        bidsHistory: [],
        timer: 0
    };

    await saveAllData();
    document.getElementById('auctionItemName').value = '';
    document.getElementById('auctionStartPrice').value = '';
    showAlert(`Auction for "${itemName}" created! Notification sent to all students.`, 'success');
}

async function acceptAuctionInvite() {
    document.getElementById('auctionInviteNotification').classList.add('hidden');
    if (AUCTION_STATE && currentUser) {
        if (!AUCTION_STATE.participants.some(p => p.id === currentUser.id)) {
            AUCTION_STATE.participants.push({ id: currentUser.id, name: currentUser.name });
            await saveAllData();
        }
    }
    switchTab('auctionTab');
}

async function declineAuctionInvite() {
    document.getElementById('auctionInviteNotification').classList.add('hidden');
    if (AUCTION_STATE && currentUser) {
        if (!AUCTION_STATE.declined) AUCTION_STATE.declined = [];
        if (!AUCTION_STATE.declined.includes(currentUser.id)) {
            AUCTION_STATE.declined.push(currentUser.id);
            await saveAllData();
        }
    }
}

async function leaveAuction() {
    if (AUCTION_STATE && currentUser) {
        AUCTION_STATE.participants = AUCTION_STATE.participants.filter(p => p.id !== currentUser.id);
        if (!AUCTION_STATE.declined) AUCTION_STATE.declined = [];
        if (!AUCTION_STATE.declined.includes(currentUser.id)) {
            AUCTION_STATE.declined.push(currentUser.id);
        }
        await saveAllData();
    }
    switchTab('transferTab');
}

async function placeBid(increment) {
    if (!AUCTION_STATE || AUCTION_STATE.status !== 'active') {
        showAlert('Auction bidding is not currently active!', 'danger');
        return;
    }

    const freshUser = ACCOUNTS_DATA.find(acc => acc.id === currentUser.id);
    const currentBalance = freshUser ? freshUser.balance : currentUser.balance;
    const newBid = AUCTION_STATE.currentBid + increment;

    if (currentBalance < newBid) {
        showAlert('You do not have enough FARADS for this bid!', 'danger');
        return;
    }

    AUCTION_STATE.currentBid = newBid;
    AUCTION_STATE.highestBidderId = currentUser.id;
    AUCTION_STATE.highestBidderName = currentUser.name;
    AUCTION_STATE.bidsHistory.push({ id: currentUser.id, name: currentUser.name, amount: newBid });
    AUCTION_STATE.timer = 10;

    if (activeBiddingInterval) {
        clearInterval(activeBiddingInterval);
        startActiveBidding10s(false);
    }

    await saveAllData();
    handleAuctionRealtimeSync();
}

async function startAuctionCountdown() {
    if (!AUCTION_STATE || !currentUser?.isAdmin) return;
    AUCTION_STATE.status = 'countdown';
    AUCTION_STATE.timer = 5;
    await saveAllData();

    let count = 5;
    const cdInterval = setInterval(async () => {
        count--;
        if (AUCTION_STATE) {
            AUCTION_STATE.timer = count;
            await saveAllData();
        }
        if (count <= 0) {
            clearInterval(cdInterval);
            startActiveBidding10s(true);
        }
    }, 1000);
}

function startActiveBidding10s(resetTimer = true) {
    if (!AUCTION_STATE) return;
    AUCTION_STATE.status = 'active';
    if (resetTimer) AUCTION_STATE.timer = 10;
    saveAllData();

    if (activeBiddingInterval) clearInterval(activeBiddingInterval);

    activeBiddingInterval = setInterval(async () => {
        AUCTION_STATE.timer--;
        if (AUCTION_STATE.timer <= 0) {
            clearInterval(activeBiddingInterval);
            activeBiddingInterval = null;
            if (currentUser?.isAdmin) finalizeAuctionWinner();
        } else {
            await saveAllData();
        }
        handleAuctionRealtimeSync();
    }, 1000);
}

async function finalizeAuctionWinner() {
    if (!AUCTION_STATE || !currentUser?.isAdmin) return;
    AUCTION_STATE.status = 'closed';
    
    const sortedBids = [...AUCTION_STATE.bidsHistory].reverse();
    let winner = null;
    let winningBid = 0;

    for (const bid of sortedBids) {
        const student = ACCOUNTS_DATA.find(a => a.id === bid.id);
        if (student && student.balance >= bid.amount) {
            winner = student;
            winningBid = bid.amount;
            break;
        }
    }

    if (winner) {
        winner.balance -= winningBid;
        if (!winner.inventory) winner.inventory = [];
        winner.inventory.push({ item: AUCTION_STATE.itemName, paid: winningBid, date: new Date().toLocaleDateString() });
        AUCTION_STATE.winnerName = winner.name;
        AUCTION_STATE.winningBid = winningBid;
    } else {
        AUCTION_STATE.winnerName = 'Nobody (No valid bids)';
    }
    await saveAllData();
}

function handleAuctionRealtimeSync() {
    const inviteBox = document.getElementById('auctionInviteNotification');
    const noAuctionView = document.getElementById('noAuctionArea');
    const activeAuctionView = document.getElementById('activeAuctionArea');
    const statusTag = document.getElementById('auctionStatusTag');

    if (!currentUser || !noAuctionView || !activeAuctionView) return;

    if (!AUCTION_STATE || AUCTION_STATE.status === 'closed') {
        if (inviteBox) inviteBox.classList.add('hidden');
        noAuctionView.classList.remove('hidden');
        activeAuctionView.classList.add('hidden');
        
        if (statusTag) {
            if (AUCTION_STATE && AUCTION_STATE.winnerName && AUCTION_STATE.status === 'closed') {
                statusTag.innerText = `SOLD to ${AUCTION_STATE.winnerName}!`;
                statusTag.style.color = "var(--success)";
            } else {
                statusTag.innerText = "No Active Auction";
                statusTag.style.color = "var(--warning)";
            }
        }
        return;
    }

    const participants = AUCTION_STATE.participants || [];
    const declined = AUCTION_STATE.declined || [];
    const hasJoined = participants.some(p => p.id === currentUser.id);
    const hasDeclined = declined.includes(currentUser.id);

    if (inviteBox) {
        if (!currentUser.isAdmin && !hasJoined && !hasDeclined) {
            document.getElementById('auctionInviteText').innerText = `Item: "${AUCTION_STATE.itemName}" | Starting Price: ${AUCTION_STATE.currentBid} FARADS`;
            inviteBox.classList.remove('hidden');
        } else {
            inviteBox.classList.add('hidden');
        }
    }

    noAuctionView.classList.add('hidden');
    activeAuctionView.classList.remove('hidden');

    if (statusTag) {
        statusTag.innerText = `LIVE: ${AUCTION_STATE.itemName}`;
        statusTag.style.color = "var(--success)";
    }

    document.getElementById('tabAuctionItemTitle').innerText = AUCTION_STATE.itemName;
    document.getElementById('tabAuctionItemSub').innerText = `Starting Price: ${AUCTION_STATE.currentBid} FARADS`;
    document.getElementById('tabAuctionHighestBidDisplay').innerText = `${AUCTION_STATE.currentBid} FARADS`;
    document.getElementById('tabAuctionHighestBidderDisplay').innerText = AUCTION_STATE.highestBidderName;

    const partList = document.getElementById('tabAuctionParticipantsList');
    if (partList) partList.innerText = participants.map(p => p.name).join(', ') || 'No participants yet';

    const timerDisp = document.getElementById('tabAuctionTimerDisplay');
    const studentCtrl = document.getElementById('tabAuctionStudentControls');
    const teacherCtrl = document.getElementById('tabAuctionTeacherControls');

    if (currentUser.isAdmin) {
        if (teacherCtrl) teacherCtrl.classList.remove('hidden');
        if (studentCtrl) studentCtrl.classList.add('hidden');
    } else {
        if (teacherCtrl) teacherCtrl.classList.add('hidden');
        if (studentCtrl) {
            if (AUCTION_STATE.status === 'active' && hasJoined) studentCtrl.classList.remove('hidden');
            else studentCtrl.classList.add('hidden');
        }
    }

    if (timerDisp) {
        if (AUCTION_STATE.status === 'waiting') timerDisp.innerText = 'Waiting Area';
        else if (AUCTION_STATE.status === 'countdown') timerDisp.innerText = `Bidding Starts In: ${AUCTION_STATE.timer}s`;
        else if (AUCTION_STATE.status === 'active') {
            if (AUCTION_STATE.timer > 3) timerDisp.innerText = `Time Remaining: ${AUCTION_STATE.timer}s`;
            else if (AUCTION_STATE.timer === 3) timerDisp.innerText = 'Going once...';
            else if (AUCTION_STATE.timer === 2) timerDisp.innerText = 'Going twice...';
            else if (AUCTION_STATE.timer === 1) timerDisp.innerText = 'Final Call!';
        }
    }
}

async function initApp() {
    await loadAllData();
    renderShopItems();
    populateTransferDropdown();
    populateDirectory();
    populateAdminDropdown();
    renderGradebookSheet();
    document.getElementById('weightW').value = GRADE_WEIGHTS.w;
    document.getElementById('weightP').value = GRADE_WEIGHTS.p;
    document.getElementById('weightE').value = GRADE_WEIGHTS.e;
    document.getElementById('gradeConvRateInput').value = GRADE_CONV_RATE;
}

async function handleLogin(e) {
    e.preventDefault();
    await loadAllData();
    const idInput = document.getElementById('loginId').value.trim();
    const passInput = document.getElementById('loginPass').value.trim();

    const user = ACCOUNTS_DATA.find(acc => acc.id === idInput && acc.pass === passInput);

    if (user) {
        currentUser = user;
        document.getElementById('loginSection').classList.add('hidden');
        document.getElementById('mainHeader').classList.remove('hidden');
        document.getElementById('appSection').classList.remove('hidden');

        if (currentUser.isAdmin) {
            document.getElementById('adminTabBtn').classList.remove('hidden');
            document.getElementById('adminEditShopBtn').classList.remove('hidden');
            document.getElementById('userPrivacySection').classList.add('hidden');
        } else {
            document.getElementById('adminTabBtn').classList.add('hidden');
            document.getElementById('adminEditShopBtn').classList.add('hidden');
            document.getElementById('userPrivacySection').classList.remove('hidden');
        }

        shopEditMode = false;
        document.getElementById('adminShopEditorPanel').classList.add('hidden');

        populateTransferDropdown();
        renderShopItems();
        updateUserDisplays();
        handleAuctionRealtimeSync();
        showAlert(`Welcome back, ${currentUser.name}!`, 'success');
    } else {
        showAlert('Invalid Account ID or Password!', 'danger');
    }
}

function logout() {
    currentUser = null;
    cart = {};
    shopEditMode = false;
    renderCart();
    document.getElementById('loginId').value = '';
    document.getElementById('loginPass').value = '';
    document.getElementById('mainHeader').classList.add('hidden');
    document.getElementById('appSection').classList.add('hidden');
    document.getElementById('loginSection').classList.remove('hidden');
    switchTab('transferTab');
    showAlert('Logged out successfully.', 'success');
}

async function savePrivacySettings() {
    if (!currentUser || currentUser.isAdmin) return;
    currentUser.privacy = {
        hideBalance: document.getElementById('privBalance').checked,
        hideCategoryGrades: document.getElementById('privCategoryGrades').checked,
        hideFinalGrade: document.getElementById('privFinalGrade').checked,
        hideInventory: document.getElementById('privInventory').checked
    };
    await saveAllData();
    populateDirectory();
    showAlert('Privacy settings updated!', 'success');
}

async function handleUserChangePassword(e) {
    e.preventDefault();
    const currentPass = document.getElementById('userCurrentPass').value;
    const newPass = document.getElementById('userNewPass').value.trim();

    if (currentUser.pass !== currentPass) {
        showAlert('Current password is incorrect!', 'danger');
        return;
    }

    if (!newPass || newPass.length < 3) {
        showAlert('New password must be at least 3 characters long.', 'danger');
        return;
    }

    currentUser.pass = newPass;
    await saveAllData();
    document.getElementById('userCurrentPass').value = '';
    document.getElementById('userNewPass').value = '';
    showAlert('Your password has been changed successfully!', 'success');
}

async function handleAdminResetPassword(e) {
    e.preventDefault();
    const targetId = document.getElementById('adminResetStudentSelect').value;
    const newPass = document.getElementById('adminNewStudentPass').value.trim();

    const student = ACCOUNTS_DATA.find(acc => acc.id === targetId);
    if (student && newPass) {
        student.pass = newPass;
        await saveAllData();
        document.getElementById('adminNewStudentPass').value = '';
        showAlert(`Password for ${student.name} reset to "${newPass}"!`, 'success');
    }
}

function computeStudentGrades(student) {
    if (student.isAdmin) return { w: 0, p: 0, e: 0, final: 0 };
    
    let wSum = 0, wCount = 0;
    let pSum = 0, pCount = 0;
    let eSum = 0, eCount = 0;
    let bonus = student.scores['bonus'] || 0;

    GRADE_COLUMNS.forEach(col => {
        const val = student.scores[col.id] || 0;
        if (col.category === 'Written') { wSum += val; wCount++; }
        else if (col.category === 'Performance') { pSum += val; pCount++; }
        else if (col.category === 'Exam') { eSum += val; eCount++; }
    });

    const avgW = wCount > 0 ? (wSum / wCount) : 0;
    const avgP = pCount > 0 ? (pSum / pCount) : 0;
    const avgE = eCount > 0 ? (eSum / eCount) : 0;

    const final = ((avgW * (GRADE_WEIGHTS.w / 100)) + 
                   (avgP * (GRADE_WEIGHTS.p / 100)) + 
                   (avgE * (GRADE_WEIGHTS.e / 100))) + bonus;

    return {
        w: avgW.toFixed(1),
        p: avgP.toFixed(1),
        e: avgE.toFixed(1),
        final: Math.min(100, final).toFixed(1)
    };
}

function updateUserDisplays() {
    if (!currentUser) return;
    currentUser = ACCOUNTS_DATA.find(acc => acc.id === currentUser.id);

    document.getElementById('userNameDisplay').innerText = currentUser.name;
    document.getElementById('userBalanceDisplay').innerText = currentUser.balance.toLocaleString();
    document.getElementById('infoName').innerText = currentUser.name;
    document.getElementById('infoId').innerText = currentUser.id;
    document.getElementById('infoRole').innerText = currentUser.isAdmin ? "Teacher / Admin" : "Student";
    document.getElementById('infoBalance').innerText = currentUser.balance.toLocaleString();
    
    const avatarContainer = document.getElementById('profileAvatarContainer');
    if (currentUser.avatar) {
        avatarContainer.innerHTML = `<img src="${currentUser.avatar}" class="profile-avatar-preview" alt="Avatar">`;
    } else {
        avatarContainer.innerHTML = `<div class="profile-avatar-preview" id="avatarPreviewText">👤</div>`;
    }

    document.getElementById('dispWeightW').innerText = GRADE_WEIGHTS.w;
    document.getElementById('dispWeightP').innerText = GRADE_WEIGHTS.p;
    document.getElementById('dispWeightE').innerText = GRADE_WEIGHTS.e;

    const grades = computeStudentGrades(currentUser);
    document.getElementById('gradeWritten').innerText = grades.w;
    document.getElementById('gradePerformance').innerText = grades.p;
    document.getElementById('gradeExam').innerText = grades.e;
    document.getElementById('gradeFinal').innerText = `${grades.final}%`;

    if (!currentUser.isAdmin) {
        const priv = currentUser.privacy || {};
        document.getElementById('privBalance').checked = !!priv.hideBalance;
        document.getElementById('privCategoryGrades').checked = !!priv.hideCategoryGrades;
        document.getElementById('privFinalGrade').checked = !!priv.hideFinalGrade;
        document.getElementById('privInventory').checked = !!priv.hideInventory;
    }

    renderUserCollection();
    renderPurchaseHistory();
    populateDirectory();
}

function renderUserCollection() {
    const list = document.getElementById('userCollectionList');
    if (!currentUser.inventory || currentUser.inventory.length === 0) {
        list.innerHTML = 'No auction items claimed yet.';
        return;
    }
    list.innerHTML = currentUser.inventory.map(item => `
        <div style="background: var(--bg-primary); padding: 0.4rem 0.6rem; border-radius: 4px; margin-bottom: 0.3rem;">
            🏆 <strong>${item.item}</strong> (${item.paid} F) - ${item.date}
        </div>
    `).join('');
}

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
    document.querySelectorAll('.tab-btn').forEach(el => el.classList.remove('active'));
    document.getElementById(tabId).classList.remove('hidden');
    
    const activeBtn = Array.from(document.querySelectorAll('.tab-btn')).find(btn => btn.getAttribute('onclick')?.includes(tabId));
    if (activeBtn) activeBtn.classList.add('active');
}

function showAlert(msg, type) {
    const box = document.getElementById('alertBox');
    box.className = `alert alert-${type}`;
    box.innerText = msg;
    box.classList.remove('hidden');
    setTimeout(() => box.classList.add('hidden'), 4000);
}

function populateTransferDropdown() {
    const select = document.getElementById('transferRecipientSelect');
    select.innerHTML = ACCOUNTS_DATA
        .filter(acc => acc.id !== currentUser?.id)
        .map(acc => `<option value="${acc.id}">${acc.name}</option>`)
        .join('');
}

async function handleTransfer(e) {
    e.preventDefault();
    const targetId = document.getElementById('transferRecipientSelect').value;
    const amount = parseFloat(document.getElementById('transferAmount').value);

    const recipient = ACCOUNTS_DATA.find(acc => acc.id === targetId);
    if (!recipient) {
        showAlert('Recipient not found!', 'danger');
        return;
    }

    if (amount <= 0 || isNaN(amount)) {
        showAlert('Please enter a valid amount.', 'danger');
        return;
    }

    if (currentUser.balance < amount) {
        showAlert('Insufficient FARADS balance!', 'danger');
        return;
    }

    currentUser.balance -= amount;
    recipient.balance += amount;
    await saveAllData();

    updateUserDisplays();
    document.getElementById('transferAmount').value = '';
    showAlert(`Successfully transferred ${amount} FARADS to ${recipient.name}!`, 'success');
}

function renderShopItems() {
    const container = document.getElementById('shopGridDisplay');
    if (!container) return;

    container.innerHTML = SHOP_CATEGORIES.map((cat, catIdx) => `
        <div style="margin-bottom: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="color: var(--accent); margin-bottom: 0.25rem;">${cat.title}</h3>
                ${shopEditMode && currentUser?.isAdmin ? `<button class="btn btn-danger btn-sm" onclick="deleteShopCategory(${catIdx})">Delete Category</button>` : ''}
            </div>
            <p style="color: var(--text-muted); font-size: 0.85rem; margin-bottom: 1rem; font-style: italic;">"${cat.description}"</p>
            <div class="shop-grid">
                ${cat.items.map((item, itemIdx) => `
                    <div class="shop-item">
                        ${shopEditMode && currentUser?.isAdmin ? `
                            <button class="btn btn-danger btn-sm" style="position: absolute; top: 8px; right: 8px; padding: 0.15rem 0.45rem;" onclick="deleteShopItem(${catIdx}, ${itemIdx})" title="Remove Item">✕</button>
                        ` : ''}
                        <div class="item-placeholder">${item.icon || '🛍️'}</div>
                        <div class="item-name">${item.name}</div>
                        ${shopEditMode && currentUser?.isAdmin ? `
                            <div style="margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.4rem;">
                                <input type="number" class="form-control" style="padding: 0.3rem; font-size: 0.9rem; width: 90px;" value="${item.price}" onchange="updateShopItemPrice(${catIdx}, ${itemIdx}, this.value)">
                                <span style="font-size: 0.8rem; color: var(--accent);">FARADS</span>
                            </div>
                        ` : `
                            <div class="item-price">${item.price} FARADS</div>
                        `}
                        <button class="btn" onclick="addToCart(${item.id})">Add to Cart</button>
                    </div>
                `).join('')}
            </div>
        </div>
    `).join('');
}

function addToCart(itemId) {
    cart[itemId] = (cart[itemId] || 0) + 1;
    renderCart();
}

function removeFromCart(itemId) {
    if (cart[itemId]) {
        cart[itemId]--;
        if (cart[itemId] <= 0) delete cart[itemId];
    }
    renderCart();
}

function clearCartCompletely() {
    cart = {};
    renderCart();
    document.getElementById('receiptArea').innerHTML = '';
    showAlert('Order declined and cart cleared.', 'danger');
}

function renderCart() {
    const container = document.getElementById('cartItemsContainer');
    let total = 0;
    const items = Object.keys(cart);
    const allShopItems = getAllShopItems();

    if (items.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted);">Your cart is currently empty.</p>`;
        document.getElementById('cartTotalDisplay').innerText = '0 FARADS';
        return;
    }

    container.innerHTML = items.map(id => {
        const item = allShopItems.find(i => i.id == id);
        if (!item) return '';
        const subtotal = item.price * cart[id];
        total += subtotal;
        return `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem; font-size: 0.9rem;">
                <div>
                    <div>${item.name}</div>
                    <div style="color: var(--text-muted);">${item.price} x ${cart[id]} = ${subtotal} FARADS</div>
                </div>
                <div>
                    <button class="btn" style="padding: 0.1rem 0.4rem;" onclick="addToCart(${item.id})">+</button>
                    <button class="btn btn-danger" style="padding: 0.1rem 0.4rem;" onclick="removeFromCart(${item.id})">-</button>
                </div>
            </div>
        `;
    }).join('');

    document.getElementById('cartTotalDisplay').innerText = `${total} FARADS`;
}

function reviewCheckout() {
    let total = 0;
    const allShopItems = getAllShopItems();
    Object.keys(cart).forEach(id => {
        const item = allShopItems.find(i => i.id == id);
        if (item) total += item.price * cart[id];
    });

    if (total === 0) {
        showAlert('Your cart is empty!', 'danger');
        return;
    }

    if (currentUser.balance < total) {
        showAlert('Insufficient FARADS to checkout!', 'danger');
        return;
    }

    const dateStr = new Date().toLocaleString();
    let receiptHtml = `
        <div class="receipt-box">
            <strong>=== FARADAY STORE RECEIPT ===</strong><br>
            Date: ${dateStr}<br>
            Buyer: ${currentUser.name}<br>
            -----------------------------------<br>
    `;
    Object.keys(cart).forEach(id => {
        const item = allShopItems.find(i => i.id == id);
        if (item) receiptHtml += `${item.name} x${cart[id]} : ${item.price * cart[id]} F<br>`;
    });
    receiptHtml += `
            -----------------------------------<br>
            <strong>TOTAL PAID: ${total} FARADS</strong><br>
            Status: SUCCESS<br>
            <button class="btn" style="margin-top:0.5rem; width:100%; font-size:0.8rem;" onclick="confirmCheckout(${total})">Confirm Purchase</button>
        </div>
    `;
    document.getElementById('receiptArea').innerHTML = receiptHtml;
}

async function confirmCheckout(total) {
    currentUser.balance -= total; 
    const dateStr = new Date().toLocaleString();
    let orderSummary = { date: dateStr, items: {...cart}, total: total };
    if (!currentUser.history) currentUser.history = [];
    currentUser.history.push(orderSummary);

    await saveAllData();
    cart = {};
    renderCart();
    document.getElementById('receiptArea').innerHTML = '';
    updateUserDisplays();
    showAlert('Checkout confirmed successfully!', 'success');
}

function renderPurchaseHistory() {
    const container = document.getElementById('purchaseHistoryContainer');
    if (!currentUser || !currentUser.history || currentUser.history.length === 0) {
        container.innerHTML = `<p style="color: var(--text-muted);">No purchases made yet.</p>`;
        return;
    }

    container.innerHTML = currentUser.history.map((order, idx) => `
        <div class="receipt-box" style="margin-bottom: 0.75rem;">
            <strong>Receipt #${idx + 1} - ${order.date}</strong><br>
            Total Paid: ${order.total} FARADS
        </div>
    `).join('');
}

function populateAdminDropdown() {
    const depositSelect = document.getElementById('adminStudentSelect');
    const resetSelect = document.getElementById('adminResetStudentSelect');
    const studentOptions = ACCOUNTS_DATA
        .filter(acc => !acc.isAdmin)
        .map(acc => `<option value="${acc.id}">${acc.name}</option>`)
        .join('');
    depositSelect.innerHTML = studentOptions;
    resetSelect.innerHTML = studentOptions;
}

async function handleAdminDeposit(e) {
    e.preventDefault();
    const targetId = document.getElementById('adminStudentSelect').value;
    const amount = parseFloat(document.getElementById('adminDepositAmount').value);

    const student = ACCOUNTS_DATA.find(acc => acc.id === targetId);
    if (student && amount > 0) {
        student.balance += amount;
        await saveAllData();
        updateUserDisplays();
        document.getElementById('adminDepositAmount').value = '';
        showAlert(`Awarded ${amount} FARADS to ${student.name}!`, 'success');
    }
}

async function saveWeights() {
    const w = parseFloat(document.getElementById('weightW').value) || 0;
    const p = parseFloat(document.getElementById('weightP').value) || 0;
    const e = parseFloat(document.getElementById('weightE').value) || 0;

    if (w + p + e !== 100) {
        showAlert('Weights must total exactly 100%!', 'danger');
        return;
    }

    GRADE_WEIGHTS = { w, p, e };
    await saveAllData();
    updateUserDisplays();
    renderGradebookSheet();
    showAlert('Grading weights updated successfully!', 'success');
}

async function saveConversionRate() {
    const rate = parseFloat(document.getElementById('gradeConvRateInput').value);
    if (isNaN(rate) || rate < 0) {
        showAlert('Please enter a valid conversion rate!', 'danger');
        return;
    }
    GRADE_CONV_RATE = rate;
    await saveAllData();
    showAlert(`Conversion rate saved (${GRADE_CONV_RATE} F per 1%).`, 'success');
}

async function applyGradeToFaradsConversion() {
    if (!confirm(`Sync student balances based on their grades (${GRADE_CONV_RATE} Farads per 1%)?`)) return;

    ACCOUNTS_DATA.forEach(acc => {
        if (!acc.isAdmin) {
            const finalGrade = parseFloat(computeStudentGrades(acc).final);
            acc.balance = Math.round(finalGrade * GRADE_CONV_RATE);
        }
    });

    await saveAllData();
    updateUserDisplays();
    renderGradebookSheet();
    populateDirectory();
    showAlert('Successfully synced student Farads balances based on grades!', 'success');
}

async function addColumnModal() {
    const name = prompt("Enter Name of New Column:");
    if (!name) return;
    const category = prompt("Enter Category ('Written', 'Performance', 'Exam', or 'Bonus'):", "Written");
    if (!['Written', 'Performance', 'Exam', 'Bonus'].includes(category)) {
        alert("Invalid category!");
        return;
    }

    const colId = 'col_' + Date.now();
    GRADE_COLUMNS.push({ id: colId, name: name, category: category });
    await saveAllData();
    renderGradebookSheet();
    showAlert(`Column '${name}' added!`, 'success');
}

async function removeColumn(colId) {
    if (confirm("Delete this grading column?")) {
        GRADE_COLUMNS = GRADE_COLUMNS.filter(col => col.id !== colId);
        await saveAllData();
        renderGradebookSheet();
        if (currentUser) updateUserDisplays();
        showAlert("Column removed successfully!", "success");
    }
}

function renderGradebookSheet() {
    const headerRow = document.getElementById('worksheetHeaderRow');
    let headerHtml = `<th>ID</th><th>Student Name</th>`;
    GRADE_COLUMNS.forEach(col => {
        headerHtml += `
            <th>
                ${col.name}<br>
                <span style="font-size:0.75rem; color:var(--accent);">(${col.category})</span>
                <button onclick="removeColumn('${col.id}')" style="background:none; border:none; color:var(--danger); cursor:pointer; font-size:0.75rem; margin-left:5px;">[X]</button>
            </th>`;
    });
    headerHtml += `<th>Final Grade</th>`;
    headerRow.innerHTML = headerHtml;

    const tbody = document.getElementById('gradebookTableBody');
    tbody.innerHTML = ACCOUNTS_DATA.filter(acc => !acc.isAdmin).map(acc => {
        let rowHtml = `<tr><td><code>${acc.id}</code></td><td>${acc.name}</td>`;
        GRADE_COLUMNS.forEach(col => {
            const val = acc.scores[col.id] || 0;
            rowHtml += `<td><input type="number" class="sheet-input" id="score_${acc.id}_${col.id}" value="${val}" min="0" max="100"></td>`;
        });
        const final = computeStudentGrades(acc).final;
        rowHtml += `<td><strong style="color: var(--accent);">${final}%</strong></td></tr>`;
        return rowHtml;
    }).join('');
}

async function saveGradebookSheet() {
    ACCOUNTS_DATA.filter(acc => !acc.isAdmin).forEach(acc => {
        if (!acc.scores) acc.scores = {};
        GRADE_COLUMNS.forEach(col => {
            const input = document.getElementById(`score_${acc.id}_${col.id}`);
            if (input) acc.scores[col.id] = parseFloat(input.value) || 0;
        });
    });

    await saveAllData();
    renderGradebookSheet();
    if (currentUser) updateUserDisplays();
    showAlert("Worksheet grades saved successfully!", "success");
}

function populateDirectory() {
    const container = document.getElementById('directorySectionsContainer');
    if (!container) return;

    const isViewerAdmin = currentUser && currentUser.isAdmin;
    const nonAdmins = ACCOUNTS_DATA.filter(acc => !acc.isAdmin && acc.group !== 'Admin');
    const sortAlpha = (a, b) => a.name.localeCompare(b.name);

    const males = nonAdmins.filter(acc => acc.group === 'Male').sort(sortAlpha);
    const females = nonAdmins.filter(acc => acc.group === 'Female').sort(sortAlpha);
    const testers = nonAdmins.filter(acc => acc.group === 'Tester').sort(sortAlpha);

    const renderGroupTable = (title, list) => {
        if (list.length === 0) return '';
        return `
            <h3 class="dir-section-title">${title} (${list.length})</h3>
            <div class="table-responsive" style="margin-bottom: 1.5rem;">
                <table>
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>10-Digit ID</th>
                            <th>Student Name</th>
                            <th>Balance</th>
                            <th>Final Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${list.map(acc => {
                            const priv = acc.privacy || {};
                            const isSelf = currentUser && currentUser.id === acc.id;
                            const canSeeBalance = isViewerAdmin || isSelf || !priv.hideBalance;
                            const canSeeFinal = isViewerAdmin || isSelf || !priv.hideFinalGrade;

                            const balanceText = canSeeBalance ? `<strong>${acc.balance.toLocaleString()}</strong> FARADS` : `<span style="color: var(--text-muted); font-style: italic;">🔒 Private</span>`;
                            const finalText = canSeeFinal ? `<span style="color: var(--success);">${computeStudentGrades(acc).final}%</span>` : `<span style="color: var(--text-muted); font-style: italic;">🔒 Private</span>`;
                            const avatarThumb = acc.avatar ? `<img src="${acc.avatar}" style="width: 32px; height: 32px; border-radius: 50%; object-fit: cover;">` : `👤`;

                            return `
                                <tr class="clickable-row" onclick="openStudentProfileModal('${acc.id}')">
                                    <td>${avatarThumb}</td>
                                    <td><code>${acc.id}</code></td>
                                    <td>${acc.name} ${isSelf ? '<span style="color: var(--accent); font-size: 0.8rem;">(You)</span>' : ''}</td>
                                    <td>${balanceText}</td>
                                    <td>${finalText}</td>
                                </tr>
                            `;
                        }).join('')}
                    </tbody>
                </table>
            </div>
        `;
    };

    container.innerHTML = renderGroupTable('Male', males) + renderGroupTable('Female', females) + renderGroupTable('Testers', testers);
}

function openStudentProfileModal(studentId) {
    const student = ACCOUNTS_DATA.find(acc => acc.id === studentId);
    if (!student || student.isAdmin) return;

    const isViewerAdmin = currentUser && currentUser.isAdmin;
    const isSelf = currentUser && currentUser.id === student.id;
    const priv = student.privacy || {};

    const canSeeBalance = isViewerAdmin || isSelf || !priv.hideBalance;
    const canSeeCatGrades = isViewerAdmin || isSelf || !priv.hideCategoryGrades;
    const canSeeFinalGrade = isViewerAdmin || isSelf || !priv.hideFinalGrade;
    const canSeeInventory = isViewerAdmin || isSelf || !priv.hideInventory;

    document.getElementById('modalStudentName').innerText = `${student.name} (${student.group})`;
    const grades = computeStudentGrades(student);

    let inventoryHtml = '';
    if (!canSeeInventory) {
        inventoryHtml = `<p style="color: var(--text-muted); font-style: italic;">🔒 Hidden by student privacy settings</p>`;
    } else if (!student.inventory || student.inventory.length === 0) {
        inventoryHtml = `<p style="color: var(--text-muted);">No auction items claimed yet.</p>`;
    } else {
        inventoryHtml = student.inventory.map(item => `
            <div style="background: var(--bg-primary); padding: 0.4rem 0.6rem; border-radius: 4px; margin-bottom: 0.3rem; font-size: 0.85rem;">
                🏆 <strong>${item.item}</strong> (${item.paid} F) - ${item.date}
            </div>
        `).join('');
    }

    const modalAvatar = student.avatar ? `<img src="${student.avatar}" style="width: 70px; height: 70px; border-radius: 50%; object-fit: cover; border: 2px solid var(--accent); margin-bottom: 0.75rem;">` : `<div style="font-size: 2.5rem; margin-bottom: 0.75rem;">👤</div>`;

    document.getElementById('modalStudentBody').innerHTML = `
        <div style="text-align: center;">${modalAvatar}</div>
        <p><strong>10-Digit ID:</strong> <code>${student.id}</code></p>
        <p style="margin-top: 0.4rem;"><strong>Group:</strong> ${student.group}</p>
        <p style="margin-top: 0.4rem;"><strong>Available Balance:</strong> ${canSeeBalance ? `<span style="color: var(--accent); font-weight: bold;">${student.balance.toLocaleString()} FARADS</span>` : `<span style="color: var(--text-muted); font-style: italic;">🔒 Private</span>`}</p>

        <div style="margin-top: 1rem; border-top: 1px solid var(--border); padding-top: 0.75rem;">
            <h4 style="color: var(--accent); margin-bottom: 0.5rem;">Academic Standing</h4>
            ${canSeeCatGrades ? `
                <p style="font-size: 0.9rem;">Written Works (${GRADE_WEIGHTS.w}%): <strong style="color: var(--success);">${grades.w}</strong></p>
                <p style="font-size: 0.9rem; margin-top: 0.2rem;">Performance Tasks (${GRADE_WEIGHTS.p}%): <strong style="color: var(--success);">${grades.p}</strong></p>
                <p style="font-size: 0.9rem; margin-top: 0.2rem;">Exam (${GRADE_WEIGHTS.e}%): <strong style="color: var(--success);">${grades.e}</strong></p>
            ` : `<p style="color: var(--text-muted); font-style: italic; font-size: 0.9rem;">🔒 Category breakdown hidden</p>`}
            <p style="font-size: 0.95rem; margin-top: 0.4rem; border-top: 1px dashed var(--border); padding-top: 0.3rem;">
                Final Equivalent Grade: ${canSeeFinalGrade ? `<strong style="color: var(--accent);">${grades.final}%</strong>` : `<span style="color: var(--text-muted); font-style: italic;">🔒 Private</span>`}
            </p>
        </div>

        <div style="margin-top: 1rem; border-top: 1px solid var(--border); padding-top: 0.75rem;">
            <h4 style="color: var(--accent); margin-bottom: 0.5rem;">Won Auction Items</h4>
            ${inventoryHtml}
        </div>
    `;

    document.getElementById('studentProfileModal').classList.remove('hidden');
}

function closeStudentProfileModal(e) {
    if (!e || e.target.id === 'studentProfileModal') {
        document.getElementById('studentProfileModal').classList.add('hidden');
    }
}

window.onload = initApp;