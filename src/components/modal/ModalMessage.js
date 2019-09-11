import React from 'react'
import { Box, Modal, Text } from 'gestalt'
import { useAppHooks } from '../../contexts'
import { CLOSE_MODAL } from '../../reducers/modalReducer'

const ModalMessage = () => {
    const { useModal } = useAppHooks()
    const [{isOpened, msg}, dispatchModal] = useModal

    const closeModal = () => dispatchModal({ type: CLOSE_MODAL })

  return (
    isOpened &&
    <Box>
      <Modal
        accessibilityCloseLabel="close"
        accessibilityModalLabel="Modal"
        heading="Error"
        onDismiss={closeModal}
        size="sm"
        role='alertdialog'
      >
          <Text bold size='xl' align='center'>{msg}</Text>
      </Modal>
    </Box>
  )
}

export default ModalMessage
