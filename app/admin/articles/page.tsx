"use client";
import { useState, useMemo } from "react";
import { useAdmin, Article } from "../../components/admin/AdminContext";
import Modal from "../../components/admin/Modal";
import ConfirmDialog from "../../components/admin/ConfirmDialog";
import StatusBadge from "../../components/admin/StatusBadge";
import Pagination from "../../components/admin/Pagination";
import LoadingState from "../../components/admin/LoadingState";
import toast from "react-hot-toast";
import {
  IoSearchOutline,
  IoAddOutline,
  IoCreateOutline,
  IoTrashOutline,
  IoFunnelOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { BiBold, BiCode, BiListUl } from "react-icons/bi";

const ITEMS_PER_PAGE = 6;
const CATEGORIES = ["Nutrition", "Pregnancy Health", "Wellness", "Fitness", "Mental Wellness", "Baby Care"];

const emptyForm = {
  title: "",
  author: "",
  category: "Nutrition",
  publishDate: new Date().toISOString().split("T")[0],
  status: "Draft" as Article["status"],
  content: "",
};

// Simple rich text editor component
function RichTextEditor({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const [mode, setMode] = useState<"visual" | "html">("visual");

  const execCommand = (command: string, val?: string) => {
    document.execCommand(command, false, val);
  };

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      {/* Toolbar */}
      <div className="flex items-center gap-1 px-3 py-2 border-b border-gray-200 bg-[#F46A6A]/5 flex-wrap">
        <button type="button" onClick={() => execCommand("bold")} className="p-1.5 rounded hover:bg-[#F46A6A]/10 transition-colors" title="Bold">
          <BiBold size={16} className="text-gray-600" />
        </button>
        <button type="button" onClick={() => execCommand("italic")} className="p-1.5 rounded hover:bg-[#F46A6A]/10 transition-colors" title="Italic">
          <span className="text-gray-600 text-sm italic font-serif">I</span>
        </button>
        <button type="button" onClick={() => execCommand("underline")} className="p-1.5 rounded hover:bg-[#F46A6A]/10 transition-colors" title="Underline">
          <span className="text-gray-600 text-sm underline">U</span>
        </button>
        <div className="h-5 w-px bg-gray-200 mx-1" />
        <button type="button" onClick={() => execCommand("formatBlock", "h2")} className="p-1.5 rounded hover:bg-[#F46A6A]/10 transition-colors" title="Heading">
          <span className="text-gray-600 text-xs font-bold">H2</span>
        </button>
        <button type="button" onClick={() => execCommand("formatBlock", "h3")} className="p-1.5 rounded hover:bg-[#F46A6A]/10 transition-colors" title="Sub Heading">
          <span className="text-gray-600 text-xs font-bold">H3</span>
        </button>
        <div className="h-5 w-px bg-gray-200 mx-1" />
        <button type="button" onClick={() => execCommand("insertUnorderedList")} className="p-1.5 rounded hover:bg-[#F46A6A]/10 transition-colors" title="List">
          <BiListUl size={16} className="text-gray-600" />
        </button>
        <button type="button" onClick={() => execCommand("insertOrderedList")} className="p-1.5 rounded hover:bg-[#F46A6A]/10 transition-colors" title="Numbered List">
          <span className="text-gray-600 text-xs font-mono">1.</span>
        </button>
        <div className="h-5 w-px bg-gray-200 mx-1" />
        <button
          type="button"
          onClick={() => setMode(mode === "visual" ? "html" : "visual")}
          className={`p-1.5 rounded transition-colors ${mode === "html" ? "bg-[#F46A6A]/15" : "hover:bg-[#F46A6A]/10"}`}
          title="HTML source"
        >
          <BiCode size={16} className="text-gray-600" />
        </button>
      </div>

      {/* Editor */}
      {mode === "visual" ? (
        <div
          contentEditable
          className="min-h-50 px-4 py-3 text-sm text-gray-800 focus:outline-none prose prose-sm max-w-none"
          dangerouslySetInnerHTML={{ __html: value }}
          onBlur={(e) => onChange(e.currentTarget.innerHTML)}
          suppressContentEditableWarning
        />
      ) : (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full min-h-50 px-4 py-3 text-sm text-gray-800 font-mono focus:outline-none resize-y"
          placeholder="<p>Write your article HTML here...</p>"
        />
      )}
    </div>
  );
}

export default function ArticlesPage() {
  const { articles, addArticle, updateArticle, deleteArticle } = useAdmin();

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [form, setForm] = useState(emptyForm);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesSearch =
        a.title.toLowerCase().includes(search.toLowerCase()) ||
        a.author.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = categoryFilter === "All" || a.category === categoryFilter;
      const matchesStatus = statusFilter === "All" || a.status === statusFilter;
      return matchesSearch && matchesCategory && matchesStatus;
    });
  }, [articles, search, categoryFilter, statusFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleAdd = () => {
    if (!form.title || !form.author) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      addArticle(form);
      setShowAddModal(false);
      setForm(emptyForm);
      setIsLoading(false);
      toast.success("Article created successfully");
    }, 500);
  };

  const handleEdit = () => {
    if (!selectedArticle) return;
    setIsLoading(true);
    setTimeout(() => {
      updateArticle(selectedArticle.id, form);
      setShowEditModal(false);
      setSelectedArticle(null);
      setForm(emptyForm);
      setIsLoading(false);
      toast.success("Article updated successfully");
    }, 500);
  };

  const handleDelete = () => {
    if (!selectedArticle) return;
    deleteArticle(selectedArticle.id);
    setShowDeleteConfirm(false);
    setSelectedArticle(null);
    toast.success("Article deleted successfully");
  };

  const openEdit = (article: Article) => {
    setSelectedArticle(article);
    setForm({
      title: article.title,
      author: article.author,
      category: article.category,
      publishDate: article.publishDate,
      status: article.status,
      content: article.content,
    });
    setShowEditModal(true);
  };

  const openDelete = (article: Article) => {
    setSelectedArticle(article);
    setShowDeleteConfirm(true);
  };

  const articleFormFields = (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Title *</label>
        <input
          type="text"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full rounded-xl border border-gray-200 h-11 px-4 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all placeholder:text-gray-400"
          placeholder="Article title"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Author *</label>
          <input
            type="text"
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
            className="w-full rounded-xl border border-gray-200 h-11 px-4 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all placeholder:text-gray-400"
            placeholder="Author name"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Category</label>
          <select
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all bg-white"
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Publish Date</label>
          <input
            type="date"
            value={form.publishDate}
            onChange={(e) => setForm({ ...form, publishDate: e.target.value })}
            className="w-full rounded-xl border border-gray-200 h-11 px-4 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Status</label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value as Article["status"] })}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all bg-white"
          >
            <option value="Draft">Draft</option>
            <option value="Published">Published</option>
          </select>
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Content</label>
        <RichTextEditor value={form.content} onChange={(v) => setForm({ ...form, content: v })} />
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Articles</h1>
          <p className="text-gray-500 mt-1">{filtered.length} articles found</p>
        </div>
        <button
          onClick={() => { setForm(emptyForm); setShowAddModal(true); }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F46A6A] text-white text-sm font-semibold hover:bg-[#e55d5d] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          <IoAddOutline size={18} />
          New Article
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative">
            <IoSearchOutline size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              value={search}
              onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }}
              placeholder="Search by title or author..."
              className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <IoFunnelOutline size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                value={categoryFilter}
                onChange={(e) => { setCategoryFilter(e.target.value); setCurrentPage(1); }}
                className="pl-8 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all bg-white appearance-none min-w-37.5"
              >
                <option value="All">All Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
              className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all bg-white appearance-none min-w-32.5"
            >
              <option value="All">All Statuses</option>
              <option value="Published">Published</option>
              <option value="Draft">Draft</option>
            </select>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        {isLoading ? (
          <div className="p-6">
            <LoadingState rows={ITEMS_PER_PAGE} />
          </div>
        ) : paginated.length === 0 ? (
          <div className="p-12 text-center">
            <IoDocumentTextOutline size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500 text-sm">No articles found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Title</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 hidden md:table-cell">Author</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 hidden lg:table-cell">Category</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 hidden md:table-cell">Date</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Status</th>
                  <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {paginated.map((article) => (
                  <tr key={article.id} className="hover:bg-[#F46A6A]/5 transition-colors">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-gray-900 truncate max-w-62.5">{article.title}</p>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-sm text-gray-600">{article.author}</span>
                    </td>
                    <td className="px-6 py-4 hidden lg:table-cell">
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#F46A6A]/10 text-[#F46A6A]">
                        {article.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-sm text-gray-500">
                        {new Date(article.publishDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={article.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => openEdit(article)}
                          className="p-2 rounded-full hover:bg-[#F46A6A]/10 text-gray-400 hover:text-[#F46A6A] transition-colors duration-200"
                          title="Edit Article"
                        >
                          <IoCreateOutline size={16} />
                        </button>
                        <button
                          onClick={() => openDelete(article)}
                          className="p-2 rounded-full hover:bg-[#F46A6A]/10 text-gray-400 hover:text-[#F46A6A] transition-colors duration-200"
                          title="Delete Article"
                        >
                          <IoTrashOutline size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        <div className="border-t border-gray-100 px-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            totalItems={filtered.length}
            itemsPerPage={ITEMS_PER_PAGE}
          />
        </div>
      </div>

      {/* Add Article Modal */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="New Article" size="xl">
        {articleFormFields}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            onClick={() => { setShowAddModal(false); setForm(emptyForm); }}
            className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            disabled={isLoading}
            className="px-5 py-2.5 rounded-full bg-[#F46A6A] text-white text-sm font-semibold hover:bg-[#e55d5d] active:bg-[#d45252] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isLoading ? "Saving..." : "Create Article"}
          </button>
        </div>
      </Modal>

      {/* Edit Article Modal */}
      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)} title="Edit Article" size="xl">
        {articleFormFields}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            onClick={() => { setShowEditModal(false); setForm(emptyForm); }}
            className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleEdit}
            disabled={isLoading}
            className="px-5 py-2.5 rounded-full bg-[#F46A6A] text-white text-sm font-semibold hover:bg-[#e55d5d] active:bg-[#d45252] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={showDeleteConfirm}
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteConfirm(false)}
        title="Delete Article"
        message={`Are you sure you want to delete "${selectedArticle?.title}"? This action cannot be undone.`}
      />
    </div>
  );
}
