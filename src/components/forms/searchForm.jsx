import { ErrorMessage, Formik } from "formik";
import { validationSchema } from "./schema";
import { customHooks_ } from "../../hooks";
import Input from "../common/input";
import Select from "../common/select";
import Button from "../common/button";
function SearchForm() {
  const { handleSearch, options } = customHooks_.UseList();
  return (
    <Formik
      initialValues={{ startDate: "", endDate: "", country: {} }}
      validationSchema={validationSchema.searchForm}
      onSubmit={handleSearch}
    >
      {({
        values,
        handleBlur,
        handleSubmit,
        setFieldValue,
        isSubmitting,
        setSubmitting,
      }) => {
        const handleCallback = (name, data) => {
          setSubmitting(false);
          setFieldValue(name, data);
        };
        return (
          <form
            className="w-fit gap-2 flex flex-wrap items-end backdrop-blur-md p-3 rounded-md mr-auto ml-auto"
            onSubmit={handleSubmit}
          >
            <Input
              cback={handleCallback}
              onBlur={handleBlur}
              value={values.startDate}
              type="date"
              name="startDate"
            >
              <ErrorMessage name={"startDate"} component="div" />
            </Input>

            <Input
              cback={handleCallback}
              onBlur={handleBlur}
              value={values.endDate}
              type="date"
              name="endDate"
            >
              <ErrorMessage name={"endDate"} component="div" />
            </Input>

            <Select
              cback={handleCallback}
              name={"country"}
              label={"select country"}
              options={options}
              value={values.country}
            >
              {/* <ErrorMessage name={"country"} component="div" /> */}
            </Select>

            <Button disabled={isSubmitting} label={"filter"} />
          </form>
        );
      }}
    </Formik>
  );
}

export default SearchForm;
