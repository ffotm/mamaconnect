"use client";
import { useState, useMemo } from "react";
import { useAdmin, Midwife } from "../../components/admin/AdminContext";
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
  IoMedkitOutline,
  IoCallOutline,
  IoMailOutline,
  IoLocationOutline,
  IoDocumentOutline,
} from "react-icons/io5";

const ITEMS_PER_PAGE = 7;

const emptyForm = {
  name: "",
  email: "",
  phone: "",
  certificationNumber: "",
  location: "",
  status: "Active" as Midwife["status"],
  joinDate: new Date().toISOString().split("T")[0],
};

export default function MidwivesPage() {
  const { midwives, addMidwife, updateMidwife, deleteMidwife } = useAdmin();

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedMidwife, setSelectedMidwife] = useState<Midwife | null>(null);
  const [form, setForm] = useState(emptyForm);

  const filtered = useMemo(() => {
    return midwives.filter((m) => {
      const matchesSearch =
        m.name.toLowerCase().includes(search.toLowerCase()) ||
        m.email.toLowerCase().includes(search.toLowerCase()) ||
        m.location.toLowerCase().includes(search.toLowerCase());
      const matchesStatus = statusFilter === "All" || m.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [midwives, search, statusFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleAdd = () => {
    if (!form.name || !form.email || !form.phone || !form.certificationNumber) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      addMidwife(form);
      setShowAddModal(false);
      setForm(emptyForm);
      setIsLoading(false);
      toast.success("Midwife added successfully");
    }, 500);
  };

  const handleEdit = () => {
    if (!selectedMidwife) return;
    setIsLoading(true);
    setTimeout(() => {
      updateMidwife(selectedMidwife.id, form);
      setShowEditModal(false);
      setSelectedMidwife(null);
      setForm(emptyForm);
      setIsLoading(false);
      toast.success("Midwife updated successfully");
    }, 500);
  };

  const handleDelete = () => {
    if (!selectedMidwife) return;
    deleteMidwife(selectedMidwife.id);
    setShowDeleteConfirm(false);
    setSelectedMidwife(null);
    toast.success("Midwife removed successfully");
  };

  const openEdit = (midwife: Midwife) => {
    setSelectedMidwife(midwife);
    setForm({
      name: midwife.name,
      email: midwife.email,
      phone: midwife.phone,
      certificationNumber: midwife.certificationNumber,
      location: midwife.location,
      status: midwife.status,
      joinDate: midwife.joinDate,
    });
    setShowEditModal(true);
  };

  const openDelete = (midwife: Midwife) => {
    setSelectedMidwife(midwife);
    setShowDeleteConfirm(true);
  };

  const MidwifeForm = ({ onSubmit, submitLabel }: { onSubmit: () => void; submitLabel: string }) => (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Full Name *</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-xl h-11 px-4 border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all placeholder:text-gray-300"
          placeholder="Enter full name"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Email *</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full rounded-xl h-11 px-4 border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all placeholder:text-gray-300"
            placeholder="Email address"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Phone *</label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full rounded-xl h-11 px-4 border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all placeholder:text-gray-300"
            placeholder="Phone number"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Certification / License # *</label>
          <input
            type="text"
            value={form.certificationNumber}
            onChange={(e) => setForm({ ...form, certificationNumber: e.target.value })}
            className="w-full rounded-xl h-11 px-4 border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all placeholder:text-gray-300"
            placeholder="MW-XXXX-XXX"
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Location</label>
          <input
            type="text"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full rounded-xl h-11 px-4 border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all placeholder:text-gray-300"
            placeholder="City, Country"
          />
        </div>
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Status</label>
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value as Midwife["status"] })}
          className="w-full rounded-xl h-11 px-4 border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all bg-white"
        >
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
          <option value="Verified">Verified</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
      <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
        <button
          onClick={() => {
            setShowAddModal(false);
            setShowEditModal(false);
            setForm(emptyForm);
          }}
          className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
        >
          Cancel
        </button>
        <button
          onClick={onSubmit}
          disabled={isLoading}
          className="px-5 py-2.5 rounded-full bg-[#F46A6A] text-white text-sm font-semibold hover:bg-[#e55d5d] active:bg-[#d45252] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {isLoading ? "Saving..." : submitLabel}
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Midwives</h1>
          <p className="text-gray-500 mt-1">{filtered.length} midwives registered</p>
        </div>
        <button
          onClick={() => { setForm(emptyForm); setShowAddModal(true); }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F46A6A] text-white text-sm font-semibold hover:bg-[#e55d5d] shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
        >
          <IoAddOutline size={18} />
          Add Midwife
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
              placeholder="Search by name, email, or location..."
              className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all placeholder:text-gray-300"
            />
          </div>
          <div className="relative">
            <IoFunnelOutline size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
              className="pl-8 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#F46A6A]/20 focus:border-[#F46A6A] transition-all bg-white appearance-none min-w-[130px]"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Verified">Verified</option>
              <option value="Pending">Pending</option>
            </select>
          </div>
        </div>
      </div>

      {/* Cards Grid */}
      {isLoading ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
          <LoadingState rows={5} />
        </div>
      ) : paginated.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-12 text-center">
          <IoMedkitOutline size={40} className="mx-auto text-gray-300 mb-3" />
          <p className="text-gray-500 text-sm">No midwives found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {paginated.map((midwife) => (
            <div
              key={midwife.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-rose-50 flex items-center justify-center">
                    <span className="text-[#F46A6A] font-semibold text-sm">
                      {midwife.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{midwife.name}</h3>
                    <StatusBadge status={midwife.status} />
                  </div>
                </div>
                <div className="flex gap-1">
                  <button
                    onClick={() => openEdit(midwife)}
                    className="p-1.5 rounded-full hover:bg-rose-50 text-gray-400 hover:text-[#F46A6A] transition-colors duration-200"
                  >
                    <IoCreateOutline size={16} />
                  </button>
                  <button
                    onClick={() => openDelete(midwife)}
                    className="p-1.5 rounded-full hover:bg-rose-50 text-gray-400 hover:text-[#F46A6A] transition-colors duration-200"
                  >
                    <IoTrashOutline size={16} />
                  </button>
                </div>
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <IoMailOutline size={14} className="text-gray-400 shrink-0" />
                  <span className="truncate">{midwife.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <IoCallOutline size={14} className="text-gray-400 shrink-0" />
                  <span>{midwife.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <IoDocumentOutline size={14} className="text-gray-400 shrink-0" />
                  <span>{midwife.certificationNumber}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <IoLocationOutline size={14} className="text-gray-400 shrink-0" />
                  <span>{midwife.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          totalItems={filtered.length}
          itemsPerPage={ITEMS_PER_PAGE}
        />
      </div>

      {/* Add Modal */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Add New Midwife" size="lg">
        <MidwifeForm onSubmit={handleAdd} submitLabel="Add Midwife" />
      </Modal>

      {/* Edit Modal */}
      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)} title="Edit Midwife" size="lg">
        <MidwifeForm onSubmit={handleEdit} submitLabel="Save Changes" />
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={showDeleteConfirm}
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteConfirm(false)}
        title="Remove Midwife"
        message={`Are you sure you want to remove "${selectedMidwife?.name}"? This action cannot be undone.`}
      />
    </div>
  );
}
