import * as React from "react";
import { Formik } from "formik";
import { fetchWithAuth } from "../../helpers/fetchWithAuth";
import { API_URL } from "../../constants";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import { Form } from "../../components/Form";

export const AddLinkForm = (props: any) => {
  return (
    <Formik
      initialValues={{ link: "" }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const response = await fetchWithAuth({
          method: "POST",
          url: `${API_URL}/links`,
          data: {
            url: values.link
          }
        });
        props.setNewLink(response.data);
        resetForm();
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting
        /* and other goodies */
      }) => (
        <Form>
          <Form.Field
            type="text"
            name="link"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.link}
            label="Add link"
          />
          {errors.link && touched.link && errors.link}
          <Form.Button disabled={isSubmitting}>Add</Form.Button>
        </Form>
      )}
    </Formik>
  );
};
