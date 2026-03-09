"use client";

import { useState } from "react";

const TOPICS = ["All Topics", "Grossesse", "Accouchement", "Bébé & Nouveau-né", "Alimentation", "Santé Mentale", "Conseils & Astuces"];

interface Reply {
  id: number;
  author: string;
  initials: string;
  avatarColor: string;
  content: string;
  time: string;
  likes: number;
}

interface Post {
  id: number;
  author: string;
  initials: string;
  avatarColor: string;
  city: string;
  topic: string;
  title: string;
  content: string;
  time: string;
  likes: number;
  replies: Reply[];
}

const POSTS: Post[] = [
  {
    id: 1,
    author: "Yasmine Khelifi",
    initials: "YK",
    avatarColor: "from-[#F46A6A] to-[#FBC4AB]",
    city: "Alger",
    topic: "Grossesse",
    title: "Astuces pour les nausées matinales — ce qui a marché pour moi",
    content:
      "Bonjour à toutes ! Je suis à 9 semaines et les nausées sont vraiment insupportables le matin. J'ai essayé le gingembre en infusion et ça m'aide beaucoup ! Ma sage-femme m'a aussi conseillé de manger quelques biscuits secs avant de me lever. Vous avez d'autres astuces ?",
    time: "Il y a 2 heures",
    likes: 24,
    replies: [
      {
        id: 1,
        author: "Nadia Ferhat",
        initials: "NF",
        avatarColor: "from-violet-400 to-purple-500",
        content: "J'ai eu les mêmes problèmes ! Le gingembre et les bonbons à la menthe m'ont beaucoup aidée. Aussi essaie de manger en petites quantités mais souvent 🌿",
        time: "Il y a 1 heure",
        likes: 8,
      },
      {
        id: 2,
        author: "Amina Lounis",
        initials: "AL",
        avatarColor: "from-emerald-400 to-teal-500",
        content: "Chez moi c'était la vitamine B6 prescrite par mon gynécologue. Demande à ton médecin si c'est adapté à ta situation 💊",
        time: "Il y a 45 min",
        likes: 5,
      },
    ],
  },
  {
    id: 2,
    author: "Fatima Bouziane",
    initials: "FB",
    avatarColor: "from-blue-400 to-cyan-500",
    city: "Oran",
    topic: "Accouchement",
    title: "Mon expérience d'accouchement à la clinique Canastel — témoignage positif",
    content:
      "Salut les mamans ! Je voulais partager mon accouchement à l'EHS Mère et Enfant Canastel à Oran. Le personnel était très professionnel et bienveillant. Ma sage-femme a été formidable tout au long du travail. Je recommande vraiment cet établissement pour les mamans de la région oranaise. Des questions ?",
    time: "Il y a 5 heures",
    likes: 47,
    replies: [
      {
        id: 1,
        author: "Sara Benmoussa",
        initials: "SB",
        avatarColor: "from-amber-400 to-orange-500",
        content: "Merci pour ce témoignage ! J'accouche dans 6 semaines et j'hésitais encore. Tu as demandé la péridurale ? Comment s'est passée la suite ?",
        time: "Il y a 4 heures",
        likes: 3,
      },
      {
        id: 2,
        author: "Fatima Bouziane",
        initials: "FB",
        avatarColor: "from-blue-400 to-cyan-500",
        content: "Oui j'ai eu la péri et tout s'est très bien passé ! Le séjour post-partum était aussi confortable. Courage à toi ! 💕",
        time: "Il y a 3 heures",
        likes: 9,
      },
    ],
  },
  {
    id: 3,
    author: "Leila Hamidi",
    initials: "LH",
    avatarColor: "from-pink-400 to-rose-500",
    city: "Constantine",
    topic: "Bébé & Nouveau-né",
    title: "Allaitement : conseils pour les premières semaines difficiles",
    content:
      "Les premières semaines d'allaitement ont été vraiment compliquées pour moi. Mon bébé avait du mal à prendre le sein et je me sentais découragée. Finalement j'ai contacté une consultante en lactation via MamaConnect et ça a tout changé ! Si vous avez des difficultés, ne restez pas seules ❤️",
    time: "Il y a 1 jour",
    likes: 63,
    replies: [
      {
        id: 1,
        author: "Rania Cherif",
        initials: "RC",
        avatarColor: "from-rose-400 to-pink-500",
        content: "Merci pour ce partage ! Je traverse exactement la même chose avec mon bébé de 3 semaines. Comment tu as trouvé la consultante ?",
        time: "Il y a 20 heures",
        likes: 6,
      },
      {
        id: 2,
        author: "Leila Hamidi",
        initials: "LH",
        avatarColor: "from-pink-400 to-rose-500",
        content: "Via la section Booking sur le tableau de bord MamaConnect ! Tu peux filtrer par spécialité. Bon courage, ça passe ! 🤱",
        time: "Il y a 18 heures",
        likes: 14,
      },
    ],
  },
  {
    id: 4,
    author: "Amira Benali",
    initials: "AB",
    avatarColor: "from-violet-400 to-purple-500",
    city: "Blida",
    topic: "Alimentation",
    title: "Recettes riches en fer pour femmes enceintes — adaptées à la cuisine algérienne",
    content:
      "Coucou ! Mon médecin m'a annoncé une légère anémie au 2ème trimestre. Plutôt que de ne compter que sur les comprimés de fer, j'ai cherché des aliments riches en fer qu'on peut facilement trouver en Algérie : lentilles, épinards, viande rouge, figues sèches et dattes. J'ai créé quelques recettes. Qui veut que je partage ?",
    time: "Il y a 2 jours",
    likes: 89,
    replies: [
      {
        id: 1,
        author: "Houria Meziane",
        initials: "HM",
        avatarColor: "from-emerald-400 to-teal-500",
        content: "Oui s'il te plaît ! Je cherche exactement ça. La chorba aux lentilles doit être une bonne idée ?",
        time: "Il y a 2 jours",
        likes: 11,
      },
      {
        id: 2,
        author: "Amira Benali",
        initials: "AB",
        avatarColor: "from-violet-400 to-purple-500",
        content: "Absolument ! La chorba aux lentilles avec citron est parfaite — le citron aide à absorber le fer végétal. Je posterai les recettes demain 🍋",
        time: "Il y a 1 jour",
        likes: 23,
      },
    ],
  },
  {
    id: 5,
    author: "Soraya Kadi",
    initials: "SK",
    avatarColor: "from-amber-400 to-orange-500",
    city: "Tizi Ouzou",
    topic: "Santé Mentale",
    title: "Anxiété pendant la grossesse — comment vous gérez ?",
    content:
      "Je suis à 22 semaines et l'anxiété me consume parfois, surtout la nuit. Je m'inquiète constamment pour la santé du bébé. Ma sage-femme m'a recommandé des exercices de respiration et la méditation. Est-ce que d'autres mamans vivent ça ? Comment vous faites pour vous calmer ?",
    time: "Il y a 3 jours",
    likes: 52,
    replies: [
      {
        id: 1,
        author: "Meriem Djabri",
        initials: "MD",
        avatarColor: "from-blue-400 to-cyan-500",
        content: "Tu n'es pas seule ! J'ai vécu la même chose. Les exercices de respiration 4-7-8 m'ont vraiment aidée. Aussi parle à ton médecin si ça devient trop fort 💙",
        time: "Il y a 2 jours",
        likes: 19,
      },
      {
        id: 2,
        author: "Samira Aouad",
        initials: "SA",
        avatarColor: "from-pink-400 to-rose-500",
        content: "Le journal de grossesse m'a beaucoup aidée — écrire mes peurs les rend moins effrayantes. Et les mouvements du bébé me rassurent toujours ❤️",
        time: "Il y a 1 jour",
        likes: 15,
      },
    ],
  },
  {
    id: 6,
    author: "Hanane Rahmani",
    initials: "HR",
    avatarColor: "from-emerald-400 to-teal-500",
    city: "Sétif",
    topic: "Conseils & Astuces",
    title: "Quoi mettre dans sa valise de maternité — liste complète pour l'Algérie",
    content:
      "Pour celles qui préparent leur valise de maternité, j'ai listé tout ce que j'ai amené et que j'aurais dû amener ! N'oubliez pas : carnets de santé, carte CHIFA, tenues pour bébé en 50 et 56, bavets, gigoteuse selon la saison. Un thermos pour tisanes et des snacks légers pour le papa aussi 😄",
    time: "Il y a 4 jours",
    likes: 112,
    replies: [
      {
        id: 1,
        author: "Lynda Cherif",
        initials: "LC",
        avatarColor: "from-rose-400 to-pink-500",
        content: "Super utile merci ! Tu recommandes quoi comme marque pour la gigoteuse ? Je suis à Alger, où tu l'as trouvée ?",
        time: "Il y a 3 jours",
        likes: 7,
      },
      {
        id: 2,
        author: "Hanane Rahmani",
        initials: "HR",
        avatarColor: "from-emerald-400 to-teal-500",
        content: "J'ai trouvé de bonnes gigoteuses chez Materna à Ben Aknoun et aussi chez les marchands du centre commercial Bab Ezzouar. Budget 2000–4000 DA 😊",
        time: "Il y a 2 jours",
        likes: 21,
      },
    ],
  },
];

export default function CommunityPage() {
  const [activeTopic, setActiveTopic] = useState("All Topics");
  const [expandedPost, setExpandedPost] = useState<number | null>(null);
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());
  const [newPostOpen, setNewPostOpen] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postTopic, setPostTopic] = useState(TOPICS[1]);
  const [postContent, setPostContent] = useState("");

  const filtered = POSTS.filter(
    (p) => activeTopic === "All Topics" || p.topic === activeTopic
  );

  function toggleLike(postId: number) {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) next.delete(postId);
      else next.add(postId);
      return next;
    });
  }

  return (
    <>
      {/* Back to Dashboard */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-[#F46A6A] transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Dashboard
          </a>
        </div>
      </div>

      {/* Hero */}
      <section
        className="relative pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #fff5f5 0%, #ffe0e0 50%, #fecdd3 100%)" }}
      >
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#F46A6A]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-pink-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-wider uppercase text-[#F46A6A] bg-white/70 px-3 py-1 rounded-full mb-4 shadow-sm">
            MamaConnect Community
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-5">
            The <span className="text-[#F46A6A]">Mothers</span> Community
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Share your experience, ask questions, and support other mothers across Algeria.
            Because no mama should go through this journey alone.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[
              { value: "1,240+", label: "Mamas Connected" },
              { value: "3,800+", label: "Posts Shared" },
              { value: "48", label: "Wilayas Represented" },
            ].map((s) => (
              <div key={s.label} className="bg-white/80 backdrop-blur rounded-2xl px-5 py-3 shadow-sm border border-white/50 text-center">
                <p className="text-xl font-extrabold text-[#F46A6A]">{s.value}</p>
                <p className="text-xs text-gray-500 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topic filters */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500 mb-4 font-medium">Browse by topic</p>
          <div className="flex flex-wrap justify-center gap-2">
            {TOPICS.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTopic(t)}
                className={`text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeTopic === t
                    ? "bg-[#F46A6A] text-white shadow-sm"
                    : "bg-gray-100 text-gray-600 hover:bg-rose-50 hover:text-[#F46A6A]"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="bg-gray-50 py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {activeTopic === "All Topics" ? "Latest Discussions" : activeTopic}
            </h2>
            <button onClick={() => setNewPostOpen(true)} className="text-sm font-semibold text-white bg-[#F46A6A] px-5 py-2 rounded-full hover:bg-[#e55d5d] transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer">
              + New Post
            </button>
          </div>

          {filtered.length > 0 ? (
            <div className="space-y-5">
              {filtered.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
                >
                  {/* Post body */}
                  <div className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`w-11 h-11 rounded-full bg-linear-to-br ${post.avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                        {post.initials}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 flex-wrap mb-0.5">
                          <span className="font-semibold text-gray-900 text-sm">{post.author}</span>
                          <span className="text-gray-400 text-xs">·</span>
                          <span className="text-gray-500 text-xs">{post.city}</span>
                          <span className="text-gray-400 text-xs">·</span>
                          <span className="text-gray-400 text-xs">{post.time}</span>
                        </div>
                        <span className="inline-block text-[10px] font-semibold text-[#F46A6A] bg-rose-50 px-2.5 py-0.5 rounded-full">
                          {post.topic}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-900 text-base mt-3 mb-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {post.content}
                    </p>

                    {/* Actions */}
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-100">
                      <button
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-1.5 text-xs font-medium transition-colors cursor-pointer ${
                          likedPosts.has(post.id) ? "text-[#F46A6A]" : "text-gray-400 hover:text-[#F46A6A]"
                        }`}
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill={likedPosts.has(post.id) ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                        </svg>
                        {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                      </button>
                      <button
                        onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                        className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-[#F46A6A] transition-colors cursor-pointer"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        {post.replies.length} {post.replies.length === 1 ? "reply" : "replies"}
                      </button>
                      <button className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-[#F46A6A] transition-colors cursopr-pointer cursor-pointer ml-auto">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
                          <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                        </svg>
                        Share
                      </button>
                    </div>
                  </div>

                  {/* Replies */}
                  {expandedPost === post.id && (
                    <div className="border-t border-gray-100 bg-gray-50">
                      {post.replies.map((reply) => (
                        <div key={reply.id} className="px-6 py-4 border-b border-gray-100 last:border-b-0">
                          <div className="flex items-start gap-3">
                            <div className={`w-8 h-8 rounded-full bg-linear-to-br ${reply.avatarColor} flex items-center justify-center text-white font-bold text-xs shrink-0`}>
                              {reply.initials}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-gray-900 text-xs">{reply.author}</span>
                                <span className="text-gray-400 text-xs">·</span>
                                <span className="text-gray-400 text-xs">{reply.time}</span>
                              </div>
                              <p className="text-sm text-gray-600 leading-relaxed">{reply.content}</p>
                              <button className="flex items-center gap-1 mt-2 text-xs text-gray-400 hover:text-[#F46A6A] transition-colors cursor-pointer">
                                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                                {reply.likes}
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                      {/* Reply input */}
                      <div className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-linear-to-br from-[#F46A6A] to-[#FBC4AB] flex items-center justify-center text-white font-bold text-xs shrink-0">
                            Me
                          </div>
                          <div className="flex-1 flex items-center gap-2">
                            <input
                              type="text"
                              placeholder="Write a reply..."
                              className="flex-1 rounded-xl border border-gray-200 py-2.5 px-4 text-sm text-gray-800 outline-none focus:border-[#F46A6A] transition-colors placeholder:text-gray-400 bg-white"
                            />
                            <button className="text-sm font-semibold text-white bg-[#F46A6A] px-4 py-2.5 rounded-xl hover:bg-[#e55d5d] transition-colors shrink-0 cursor-pointer">
                              Reply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-5xl mb-4 block">💬</span>
              <p className="text-gray-500 text-sm">No discussions found for this topic yet. Be the first to post!</p>
            </div>
          )}
        </div>
      </section>

      {/* New Post Modal */}
      {newPostOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <h3 className="text-base font-bold text-gray-900">New Post</h3>
              <button
                onClick={() => setNewPostOpen(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Topic</label>
                <select
                  value={postTopic}
                  onChange={(e) => setPostTopic(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F46A6A]/30 focus:border-[#F46A6A]"
                >
                  {TOPICS.filter((t) => t !== "All Topics").map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Title</label>
                <input
                  type="text"
                  placeholder="What's your post about?"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F46A6A]/30 focus:border-[#F46A6A]"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1.5">Content</label>
                <textarea
                  rows={4}
                  placeholder="Share your thoughts, questions, or experience..."
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F46A6A]/30 focus:border-[#F46A6A] resize-none"
                />
              </div>
              <div className="flex gap-3 pt-1">
                <button
                  onClick={() => setNewPostOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={() => { setNewPostOpen(false); setPostTitle(""); setPostContent(""); }}
                  className="flex-1 py-2.5 rounded-xl bg-[#F46A6A] text-white text-sm font-semibold hover:bg-[#e55a5a] transition-colors shadow-sm"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
