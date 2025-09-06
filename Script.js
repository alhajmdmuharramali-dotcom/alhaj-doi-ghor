// প্রোডাক্ট লিস্ট
const products = [
  { name: "স্পেশাল মিষ্টি দই (সরা)", weight: "500g", price: 220 },
  { name: "স্পেশাল মিষ্টি দই (হাড়ি)", weight: "1500g", price: 380 },
  { name: "স্পেশাল মিষ্টি দই (কাপ)", weight: "80g", price: 40 },
  { name: "শাহী দই (সরা)", weight: "500g", price: 260 },
  { name: "টক দই ছোট (হাড়ি)", weight: "300g", price: 90 },
  { name: "টক দই বড় (হাড়ি)", weight: "600g", price: 160 },
  { name: "সাদা মিষ্টি", weight: "1kg", price: 300 },
  { name: "কালো জাম মিষ্টি", weight: "1kg", price: 300 },
  { name: "চমচম মিষ্টি", weight: "1kg", price: 340 },
  { name: "মৌচাক মিষ্টি", weight: "1kg", price: 340 },
  { name: "হাসিখুশি মিষ্টি", weight: "1kg", price: 340 },
  { name: "রসগোল্লা মিষ্টি", weight: "1kg", price: 320 },
  { name: "স্পঞ্জ মিষ্টি", weight: "1kg", price: 320 },
  { name: "গোলাপ জামুন", weight: "1kg", price: 350 },
  { name: "ছানার জিলাপি", weight: "1kg", price: 500 },
  { name: "ক্ষীরমহন", weight: "1kg", price: 500 },
  { name: "খিরসা মহন", weight: "1kg", price: 600 },
  { name: "ল্যাংচা", weight: "1kg", price: 600 },
  { name: "পিটা সন্দেশ", weight: "1kg", price: 560 },
  { name: "প্যারা সন্দেশ", weight: "1kg", price: 600 },
  { name: "রাঘবসাই সন্দেশ (গুড়)", weight: "1kg", price: 600 },
  { name: "রাঘবসাই সন্দেশ (চিনি)", weight: "1kg", price: 600 },
  { name: "বোম্বে সন্দেশ", weight: "1kg", price: 600 },
  { name: "রসমালাই", weight: "1kg", price: 540 },
  { name: "মতিচুরের লাড্ডু (হলুদ)", weight: "1kg", price: 220 },
  { name: "মতিচুরের লাড্ডু (লাল)", weight: "1kg", price: 220 },
  { name: "খিরসা বাটি", weight: "400g", price: 360 },
  { name: "খিরসা কাপ", weight: "100g", price: 90 },
  { name: "শাহী ফিরনি", weight: "1kg", price: 280 },
  { name: "শাহী ফিরনি কাপ", weight: "100g", price: 30 },
  { name: "ঘোল", weight: "1000ml", price: 120 },
  { name: "ঘোল", weight: "500ml", price: 65 },
  { name: "ঘোল", weight: "250ml", price: 35 },
  { name: "লাচ্ছা সেমাই (ডালডায় ভাজা)", weight: "500g", price: 160 },
  { name: "লাচ্ছা সেমাই (ঘিয়ে ভাজা)", weight: "500g", price: 500 },
  { name: "সাদা (চিকন) সেমাই", weight: "500g", price: 80 }
];

// ওয়েবসাইটে প্রোডাক্ট দেখানো
const productContainer = document.getElementById("products");
products.forEach((p, index) => {
  const div = document.createElement("div");
  div.className = "product-card";
  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>Weight: ${p.weight}</p>
    <p>Price: ${p.price} টাকা</p>
    <a class="order-btn" href="https://wa.me/8801760919193?text=আমি ${p.name} (${p.weight}) অর্ডার করতে চাই।">
      📲 WhatsApp Order
    </a>
  `;
  productContainer.appendChild(div);
});
