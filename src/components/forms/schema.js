import * as Yup from "yup";
import moment from "moment";
const searchForm = Yup.object().shape({
    startDate: Yup.string().required("Start date is required"),
    endDate: Yup.string()
      .required("End date is required")
      .when("startDate", (startDate, schema) => {
        return schema.test(
          "max-diff",
          " can't exceed 30 days",
          function (endDate) {
            if (!startDate || !endDate) return true; // If either date is not present, skip the test
            const start = moment(startDate, "YYYY-MM-DD");
            const end = moment(endDate, "YYYY-MM-DD");
            return end.isValid() && start.isValid() && end.diff(start, "days") <= 30;
          }
        );
      }),
    country: Yup.object().notRequired(),
  });

export const validationSchema = { searchForm };
