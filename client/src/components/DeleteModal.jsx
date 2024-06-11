
function DeleteModal({handleDeleteToggler}) {
  const handleClose=()=>{
    handleDeleteToggler();
  }

  const handleSubmit=()=>{
    // delete logic here
    handleClose()
  }
  return (
    <div className="delete-container">
      <div className="head2"><div>Are you sure you want to delete this ?</div></div>
      <hr/>
      <div className="btns">
        <button onClick={handleClose} id='cancel'>Cancel</button>
        <button onClick={handleSubmit}>Confirm</button>
      </div>
    </div>
  )
}

export default DeleteModal;
