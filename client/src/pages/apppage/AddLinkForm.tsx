import * as React from "react";
import { Formik, FormikValues } from "formik";
import { fetchWithAuth } from "../../helpers/fetchWithAuth";
import { API_URL } from "../../constants";
import { connect } from "react-redux";
import { TextField } from "@material-ui/core";
import { Form } from "../../components/Form";
import { addLink } from "../../redux/actions";
import { Link } from "../../redux/reducers/linksReducer";
import * as Yup from "yup";
import { withSnackbar } from "notistack";
import { compose } from "redux";

const AddLinkSchema = Yup.object().shape({
  url: Yup.string().required("Add url")
});

interface Props {
  addLink: (link: Link) => void;
  [type: string]: any;
}

const Component = (props: Props) => {
  return (
    <Formik
      initialValues={{ url: "" }}
      validationSchema={AddLinkSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        try {
          const response = await fetchWithAuth({
            url: `${API_URL}/links`,
            method: "POST",
            data: {
              url: values.url
            }
          });
          const link: Link = response.data;
          props.addLink(link);
          resetForm();
          // set snackbar
        } catch (err) {
          const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message;
          // set snackbar
        }

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
        <React.Fragment>
          <Form onSubmit={handleSubmit}>
            <Form.Field
              type="text"
              name="url"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.url}
              label={"Add url"}
            />
            <Form.Button disabled={isSubmitting}>Add</Form.Button>
          </Form>
        </React.Fragment>
      )}
    </Formik>
  );
};

export const AddLinkForm = compose(
  withSnackbar,
  connect(
    null,
    { addLink }
  )
)(Component);
