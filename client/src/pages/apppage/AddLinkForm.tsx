import * as React from "react";
import { Formik, FormikValues } from "formik";
import { fetchWithAuth } from "../../helpers/fetchWithAuth";
import { API_URL } from "../../constants";
import { connect } from "react-redux";
import { Form } from "../../components/Form";
import { addLink } from "../../redux/actions";
import { Link } from "../../redux/reducers/linksReducer";
import * as Yup from "yup";
import { withSnackbar, InjectedNotistackProps } from "notistack";
import { compose } from "redux";

const AddLinkSchema = Yup.object().shape({
  url: Yup.string().required("Add url")
});

interface Props {
  addLink: (link: Link) => void;
  enqueueSnackbar: InjectedNotistackProps["enqueueSnackbar"];
  [type: string]: any;
}

// compose doesn't work without React.StatelessComponent<Props>
const Component: React.StatelessComponent<Props> = (props: Props) => {
  console.log(props);
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
          props.enqueueSnackbar("Add link", { variant: "success" });
        } catch (err) {
          const message =
            (err.response && err.response.data && err.response.data.message) ||
            err.message;
          // set snackbar
          props.enqueueSnackbar(message, { variant: "error" });
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

// compose doesn't work without React.StatelessComponent<Props>
export const AddLinkForm = compose(
  connect(
    null,
    { addLink }
  ),
  withSnackbar
)(Component) as React.StatelessComponent;
