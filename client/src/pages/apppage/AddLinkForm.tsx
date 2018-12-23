import * as React from "react";
import { Formik } from "formik";
import { fetchWithAuth } from "../../helpers/fetchWithAuth";
import { API_URL } from "../../constants";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import { Form } from "../../components/Form";
import { addLink } from "../../redux/actions";

interface Props {
  addLink: (url: string) => void;
  [type: string]: any;
}

const Component = (props: Props) => {
  return (
    <Formik
      initialValues={{ url: "" }}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        props.addLink(values.url)

        resetForm();
        setSubmitting(false);
        console.log(values.url)
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
        <Form onSubmit={handleSubmit}>
          <Form.Field
            type="text"
            name="url"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.url}
            label="Add url"
          />
          {errors.url && touched.url && errors.url}
          <Form.Button disabled={isSubmitting}>Add</Form.Button>
        </Form>
      )}
    </Formik>
  );
};

export const AddLinkForm = connect(
  null,
  { addLink }
)(Component);
