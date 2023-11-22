import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalContent, Button, Spinner, Input, Select, SelectItem, Chip } from "@nextui-org/react";
import { MailIcon, LockIcon } from '../../dashboard/icons/Icons';
const AdminAddModal = ({ isOpen, onOpenChange, onSaveClick, onClose, loading, feedback, teams, newUser, selectedTeam, handleInputChange, handleTeamChange }) => {
  return (
    <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="bottom-center" backdrop='blur'>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">Tambah Admin Baru</ModalHeader>
            <ModalBody>
              {loading && <Spinner color="success" />}
              {feedback && <p>{feedback}</p>}
              {!loading && !feedback && (
                <>
                  <Input
                    autoFocus
                    isRequired
                    label="username"
                    placeholder="Masukan User Username"
                    variant="bordered"
                    value={newUser.username}
                    onChange={(e) => handleInputChange('username', e.target.value)}
                  />
                  <Input
                    isRequired
                    label="Nama Depan"
                    placeholder="Masukan Nama Depan"
                    variant="bordered"
                    value={newUser.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                  />
                  <Input
                    isRequired
                    label="Nama Belakang"
                    placeholder="Masukan Nama Belakang"
                    variant="bordered"
                    value={newUser.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                  />
                  <Select
                    size="sm"
                    label="Pilih Team"
                    value={selectedTeam}
                    variant="bordered"
                    onChange={(value) => handleTeamChange(value)}
                  >
                    {teams.map((team) => (
                      <SelectItem key={team.value} value={team.value}>
                        {team.lebel}
                      </SelectItem>
                    ))}
                  </Select>
                  <Input
                    isRequired
                    endContent={<MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                    label="Email"
                    type='email'
                    placeholder="Masukan Email"
                    variant="bordered"
                    value={newUser.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  <Input
                    endContent={<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                    label="Password"
                    placeholder="Masukan Password"
                    type="password"
                    variant="bordered"
                    value={newUser.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                  />
                </>
              )}
            </ModalBody>
            <ModalFooter>
              {!loading && !feedback && (
                <>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={onSaveClick}>
                    Save
                  </Button>
                </>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default AdminAddModal;