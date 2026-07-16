"use client";

import { deleteProduct } from "@/lib/core/actions/action";
import {AlertDialog, Button} from "@heroui/react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { BiTrash } from "react-icons/bi";

const AlertConfirm =({product}: {product: any})=> {
  const router = useRouter()
  const productId = product._id

const handleDelete = async()=>{
  const res = await deleteProduct(productId)
  if(res.deletedCount){
    toast.success('product deleted successfully')
    router.push('/dashboard/seller/add-product')
    router.refresh()
  }
}
  return (
    <AlertDialog>
      <Button className={'bg-slate-800 text-foreground'}><BiTrash/></Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete product permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>Product</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" onClick={handleDelete}>
                Delete Product
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}

export default AlertConfirm;