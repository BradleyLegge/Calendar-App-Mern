import { create } from "zustand"
import api from "../lib/axios"

export const useBillsStore = create((set) => ({
    bills: [],

    // Fetch all bills from database
    fetchBills: async () => {
        try {
            const res = await api.get("/bills");
            set({ bills: res.data})
        } catch (error) {
            console.log("Error fetching bills.")
        }
    },

    // Add a bill to database
    addBill: async (bill) => {
        try {
            const res = await api.post("/bills", bill)
            set((state) => ({ bills: [...state.bills, res.data]}))
        } catch (error) {
            console.log("Error adding bill.")
            console.log(error.message)
        }
    },

    // Update bill from database
    updateBill: async (id, updatedData) => {
        try {
            const res = await api.put(`/bills/${id}`, updatedData);
            set((state) => ({
                bills: state.bills.map((bill) =>
                bill._id === id ? res.data : bill)
            }))
        } catch (error) {
            console.log("Error updating bill.")
        }
    },

    // Delete bill from database
    deleteBill: async (id) => {
        try {
            await api.delete(`/bills/${id}`);
            set((state) => ({
                bills: state.bills.filter((bill) => bill._id !== id)
            }))
        } catch (error) {
            console.log("Error deleting bill.")
        }
    }
}))