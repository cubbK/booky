import * as React from "react";
import { Formik, FormikProps, Form, Field, FieldProps } from "formik";
import { fetchWithAuth } from "../../helpers/fetchWithAuth";
import { API_URL } from "../../constants";

export const AddLinkForm = () => {
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
};
