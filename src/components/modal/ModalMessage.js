import React from 'react'
import { Box, Modal, Text } from 'gestalt'
import { useAppHooks } from '../../contexts'
import { CLOSE_MODAL } from '../../reducers/modalReducer'

const ModalMessage = () => {
    const { useModal } = useAppHooks()
    const [{isOpened, msg, children, title, size, role}, dispatchModal] = useModal

    const closeModal = () => dispatchModal({ type: CLOSE_MODAL })

  return (
    isOpened &&
    <Box>
      <Modal
        accessibilityCloseLabel="close"
        accessibilityModalLabel={!children ? "Modal" : title}
        heading={!children ? "Error" : title}
        onDismiss={closeModal}
        size={!children ? "sm" : size}
        role={!children ? 'alertdialog' : role}
      >
          {!children ? <Text bold size='xl' align='center'>{msg}</Text> : children}
      </Modal>
    </Box>
  )
}

export default ModalMessage
