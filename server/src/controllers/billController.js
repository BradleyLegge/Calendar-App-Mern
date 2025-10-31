import Bill from "../models/Bill.js"


export const getBills = async (req, res) => {
    try {
        const bills = await Bill.find().sort({dueDate: 1})
        res.json(bills);
    } catch (error) {
        
    }
}

export const createBill = async (req, res) => {
    try {
        const { name, dueDate, amount } = req.body;

        if(!name || !dueDate || !amount) {
            res.status(400);
            throw new Error("Please provide all fields")
        }

        const bill = await Bill.create({ name, dueDate, amount });
        res.status(201).json(bill);
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
}

export const updateBill = async (req, res) => {
    try {
        const { name, dueDate, amount } = req.body;
        const bill = await Bill.findById(req.params.id)
        
        if(!bill){
            res.status(404);
            throw new Error("Bill not found")
        }

        bill.name = name || bill.name;
        bill.dueDate = dueDate || bill.dueDate;
        bill.amount = amount || bill.amount;

        const updatedBill = await bill.save()
        res.json(updatedBill)

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const deleteBill = async (req, res) => {
    try {
        const bill = await Bill.findById(req.params.id);

        if(!bill){
            res.status(404);
            throw new Error("Bill not found")
        }

        await bill.deleteOne();
        res.json({ message: "Bill removed"})
    } catch (error) {
        res.status(500).json({message: error.message})

    }
}