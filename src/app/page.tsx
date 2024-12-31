interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function FetchPosts() {
  // API سے ڈیٹا حاصل کریں
  const response = await fetch("http://localhost:3000/api/externel", {
    cache: "no-store", // ہر بار نیا ڈیٹا حاصل کرنے کے لیے
  });

  if (!response.ok) {
    // اگر ڈیٹا حاصل کرنے میں ناکامی ہو
    return <div>پوسٹس لوڈ کرنے میں ناکامی۔ براہ کرم دوبارہ کوشش کریں۔</div>;
  }

  const { data: posts }: { data: Post[] } = await response.json();

  // ڈیٹا کو رینڈر کریں
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {posts.map((post) => (
        <div key={post.id} className="border p-4 rounded shadow">
          <h2 className="text-lg font-bold">{post.title}</h2>
          <p className="text-gray-600">{post.body}</p>
        </div>
      ))}
    </div>
  );
}
