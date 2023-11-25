import React, { useState } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter, ModalContent, Button, Spinner, Input, Select, SelectItem, Chip } from "@nextui-org/react";
import { MailIcon, LockIcon } from '../../dashboard/icons/Icons';
import * as Yup from 'yup';
import { Formik, useFormik } from 'formik';
import validation from '../../../utils/validation';

const AdminAddModal = ({ isOpen, onOpenChange, onSaveClick, onClose, loading, feedback, teams, newUser, selectedTeam, handleInputChange, handleTeamChange, formik }) => {

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
                    {...formik.getFieldProps('username')}
                    errorMessage={formik.touched.username && formik.errors.username}
                  />
                  <Input
                    isRequired
                    label="Nama Depan"
                    placeholder="Masukan Nama Depan"
                    variant="bordered"
                    {...formik.getFieldProps('firstName')}
                    errorMessage={formik.touched.firstName && formik.errors.firstName}
                  />
                  <Input
                    isRequired
                    label="Nama Belakang"
                    placeholder="Masukan Nama Belakang"
                    variant="bordered"
                    {...formik.getFieldProps('lastName')}
                    errorMessage={formik.touched.lastName && formik.errors.lastName}
                  />
                  <Select
                    size="sm"
                    label="Pilih Team"
                    value={selectedTeam}
                    variant="bordered"

                    {...formik.getFieldProps('team')}
                    errorMessage={formik.touched.team && formik.errors.eteamail}
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
                    {...formik.getFieldProps('email')}
                    errorMessage={formik.touched.email && formik.errors.email}
                  // value={newUser.email}
                  // onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                  <Input
                    endContent={<LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />}
                    label="Password"
                    placeholder="Masukan Password"
                    type="password"
                    variant="bordered"
                    {...formik.getFieldProps('password')}
                    errorMessage={formik.touched.password && formik.errors.password}
                  // value={newUser.password}
                  // onChange={(e) => handleInputChange('password', e.target.value)}
                  />
                </>
              )}
            </ModalBody>
            <ModalFooter>
              {!formik.isSubmitting && !formik.status && !loading && !feedback && (
                <>
                  <Button color="danger" variant="flat" onPress={onClose}>
                    Close
                  </Button>
                  <Button color="primary" onPress={formik.handleSubmit}>
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