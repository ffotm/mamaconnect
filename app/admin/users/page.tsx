"use client";
import { useState, useMemo } from "react";
import { useAdmin, User } from "../../components/admin/AdminContext";
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
  IoEyeOutline,
  IoFunnelOutline,
  IoPeopleOutline,
} from "react-icons/io5";

const ITEMS_PER_PAGE = 8;

const emptyForm = {
  name: "",
  email: "",
  role: "Client" as User["role"],
  status: "Active" as User["status"],
  registrationDate: new Date().toISOString().split("T")[0],
};

export default function UsersPage() {
  const { users, addUser, updateUser, deleteUser } = useAdmin();

  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState<string>("All");
  const [statusFilter, setStatusFilter] = useState<string>("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Modal states
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [form, setForm] = useState(emptyForm);

  // Filtered and paginated data
  const filtered = useMemo(() => {
    return users.filter((u) => {
      const matchesSearch =
        u.name.toLowerCase().includes(search.toLowerCase()) ||
        u.email.toLowerCase().includes(search.toLowerCase());
      const matchesRole = roleFilter === "All" || u.role === roleFilter;
      const matchesStatus = statusFilter === "All" || u.status === statusFilter;
      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, search, roleFilter, statusFilter]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Handlers
  const handleAdd = () => {
    if (!form.name || !form.email) {
      toast.error("Please fill in all required fields");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      addUser(form);
      setShowAddModal(false);
      setForm(emptyForm);
      setIsLoading(false);
      toast.success("User created successfully");
    }, 500);
  };

  const handleEdit = () => {
    if (!selectedUser) return;
    setIsLoading(true);
    setTimeout(() => {
      updateUser(selectedUser.id, form);
      setShowEditModal(false);
      setSelectedUser(null);
      setForm(emptyForm);
      setIsLoading(false);
      toast.success("User updated successfully");
    }, 500);
  };

  const handleDelete = () => {
    if (!selectedUser) return;
    deleteUser(selectedUser.id);
    setShowDeleteConfirm(false);
    setSelectedUser(null);
    toast.success("User deleted successfully");
  };

  const openEdit = (user: User) => {
    setSelectedUser(user);
    setForm({
      name: user.name,
      email: user.email,
      role: user.role,
      status: user.status,
      registrationDate: user.registrationDate,
    });
    setShowEditModal(true);
  };

  const openView = (user: User) => {
    setSelectedUser(user);
    setShowViewModal(true);
  };

  const openDelete = (user: User) => {
    setSelectedUser(user);
    setShowDeleteConfirm(true);
  };

  const userFormFields = (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Full Name *</label>
        <input
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full rounded-xl h-11 px-4 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#F08080]/20 focus:border-[#F08080] transition-all placeholder:text-gray-400"
          placeholder="Enter full name"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-500 mb-1.5">Email *</label>
        <input
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full rounded-xl h-11 px-4 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#F08080]/20 focus:border-[#F08080] transition-all placeholder:text-gray-400"
          placeholder="Enter email address"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Role</label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value as User["role"] })}
            className="w-full rounded-xl h-11 px-4 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#F08080]/20 focus:border-[#F08080] transition-all bg-white"
          >
            <option value="Client">Client</option>
            <option value="Midwife">Midwife</option>
            <option value="Admin">Admin</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-500 mb-1.5">Status</label>
          <select
            value={form.status}
            onChange={(e) => setForm({ ...form, status: e.target.value as User["status"] })}
            className="w-full rounded-xl h-11 px-4 border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#F08080]/20 focus:border-[#F08080] transition-all bg-white"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Users</h1>
          <p className="text-gray-500 mt-1">{filtered.length} users found</p>
        </div>
        <button
          onClick={() => {
            setForm(emptyForm);
            setShowAddModal(true);
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F08080] text-white text-sm font-semibold hover:bg-[#e07070] hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 shadow-sm"
        >
          <IoAddOutline size={18} />
          Add User
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
              placeholder="Search by name or email..."
              className="w-full h-11 pl-11 pr-4 rounded-xl border border-gray-200 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-[#F08080]/20 focus:border-[#F08080] transition-all placeholder:text-gray-400"
            />
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <IoFunnelOutline size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <select
                value={roleFilter}
                onChange={(e) => { setRoleFilter(e.target.value); setCurrentPage(1); }}
                className="pl-8 pr-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#F08080]/20 focus:border-[#F08080] transition-all bg-white appearance-none min-w-30"
              >
                <option value="All">All Roles</option>
                <option value="Client">Client</option>
                <option value="Midwife">Midwife</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <select
              value={statusFilter}
              onChange={(e) => { setStatusFilter(e.target.value); setCurrentPage(1); }}
              className="px-4 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:ring-1 focus:ring-[#F08080]/20 focus:border-[#F08080] transition-all bg-white appearance-none min-w-32.5"
            >
              <option value="All">All Statuses</option>
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Suspended">Suspended</option>
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
            <IoPeopleOutline size={40} className="mx-auto text-gray-300 mb-3" />
            <p className="text-gray-500 text-sm">No users found</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">User</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Role</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3 hidden md:table-cell">Registration</th>
                  <th className="text-left text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Status</th>
                  <th className="text-right text-xs font-semibold text-gray-500 uppercase tracking-wider px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {paginated.map((user) => (
                  <tr key={user.id} className="hover:bg-[#FFDAB9]/25 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-[#FFDAB9] flex items-center justify-center shrink-0">
                          <span className="text-[#F08080] font-semibold text-xs">
                            {user.name.split(" ").map((n) => n[0]).join("")}
                          </span>
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{user.name}</p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-gray-700">{user.role}</span>
                    </td>
                    <td className="px-6 py-4 hidden md:table-cell">
                      <span className="text-sm text-gray-500">
                        {new Date(user.registrationDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <StatusBadge status={user.status} />
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => openView(user)}
                          className="p-2 rounded-full hover:bg-[#FFDAB9] text-gray-400 hover:text-[#F08080] transition-colors duration-200"
                          title="View Profile"
                        >
                          <IoEyeOutline size={16} />
                        </button>
                        <button
                          onClick={() => openEdit(user)}
                          className="p-2 rounded-full hover:bg-[#FFDAB9] text-gray-400 hover:text-[#F08080] transition-colors duration-200"
                          title="Edit User"
                        >
                          <IoCreateOutline size={16} />
                        </button>
                        <button
                          onClick={() => openDelete(user)}
                          className="p-2 rounded-full hover:bg-[#FFDAB9] text-gray-400 hover:text-[#F08080] transition-colors duration-200"
                          title="Delete User"
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

      {/* Add User Modal */}
      <Modal isOpen={showAddModal} onClose={() => setShowAddModal(false)} title="Add New User">
        {userFormFields}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            onClick={() => { setShowAddModal(false); setForm(emptyForm); }}
            className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-[#FFDAB9]/40 active:bg-[#FFDAB9]/60 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            disabled={isLoading}
            className="px-5 py-2.5 rounded-full bg-[#F08080] text-white text-sm font-semibold hover:bg-[#e07070] active:bg-[#d06060] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isLoading ? "Saving..." : "Create User"}
          </button>
        </div>
      </Modal>

      {/* Edit User Modal */}
      <Modal isOpen={showEditModal} onClose={() => setShowEditModal(false)} title="Edit User">
        {userFormFields}
        <div className="flex justify-end gap-3 pt-4 border-t border-gray-100">
          <button
            onClick={() => { setShowEditModal(false); setForm(emptyForm); }}
            className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-[#FFDAB9]/40 active:bg-[#FFDAB9]/60 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleEdit}
            disabled={isLoading}
            className="px-5 py-2.5 rounded-full bg-[#F08080] text-white text-sm font-semibold hover:bg-[#e07070] active:bg-[#d06060] transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {isLoading ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </Modal>

      {/* View User Modal */}
      <Modal isOpen={showViewModal} onClose={() => setShowViewModal(false)} title="User Profile">
        {selectedUser && (
          <div className="space-y-4">
            <div className="flex items-center gap-4 pb-4 border-b border-gray-100">
              <div className="w-16 h-16 rounded-full bg-[#FFDAB9] flex items-center justify-center">
                <span className="text-[#F08080] font-bold text-lg">
                  {selectedUser.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>
              <div>
                <h3 className="text-lg font-bold text-gray-900">{selectedUser.name}</h3>
                <p className="text-sm text-gray-500">{selectedUser.email}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Role</p>
                <p className="text-sm text-gray-900 mt-1">{selectedUser.role}</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Status</p>
                <div className="mt-1"><StatusBadge status={selectedUser.status} /></div>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Registration Date</p>
                <p className="text-sm text-gray-900 mt-1">
                  {new Date(selectedUser.registrationDate).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">User ID</p>
                <p className="text-sm text-gray-900 mt-1">#{selectedUser.id}</p>
              </div>
            </div>
            <div className="flex justify-end pt-4 border-t border-gray-100">
              <button
                onClick={() => setShowViewModal(false)}
                className="px-5 py-2.5 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-[#FFDAB9]/40 active:bg-[#FFDAB9]/60 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Delete Confirmation */}
      <ConfirmDialog
        isOpen={showDeleteConfirm}
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteConfirm(false)}
        title="Delete User"
        message={`Are you sure you want to delete "${selectedUser?.name}"? This action cannot be undone.`}
      />
    </div>
  );
}
