import * as React from "react";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";
import { fetchWithAuth } from "../../helpers/fetchWithAuth";
import { API_URL } from "../../constants";
import { connect } from "react-redux";
import { setNewLink } from "../../redux/actions";

interface Props {
  setNewLink: (link: any) =>void;
}

export const AddLinkForm = connect(null, { setNewLink })((props: Props) => {
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
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="link"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.link}
          />
          {errors.link && touched.link && errors.link}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  );
});
