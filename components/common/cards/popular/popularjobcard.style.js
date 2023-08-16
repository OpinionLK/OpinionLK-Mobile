import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../../constants";

const styles = StyleSheet.create({
  container: (selectedJob, item) => ({
    width: 260,
    padding: 5,
    backgroundColor: selectedJob === item.job_id ? COLORS.primary : "#FFF",
    borderRadius: SIZES.medium,
    justifyContent: "space-between",
    ...SHADOWS.medium,
    shadowColor: COLORS.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
    columnGap: SIZES.xSmall,
  }),
  logoContainer: (selectedJob, item) => ({
    width: 50,
    height: 50,
    backgroundColor: selectedJob === item.job_id ? "#FFF" : COLORS.white,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  }),
  logoImage: {
    width: 50,
    height: 50,
  },
  companyName: {
    fontSize: SIZES.medium,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
    marginTop: SIZES.small / 1.5,
  },
  infoContainer: {
    marginTop: SIZES.large,
  },
  jobName: (selectedJob, item) => ({
    fontSize: SIZES.large,
    fontFamily: FONT.medium,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  infoWrapper: {
    flexDirection: "row",
    marginTop: 5,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  publisher: (selectedJob) => ({
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.bold,
    color: selectedJob === item.job_id ? COLORS.white : COLORS.primary,
  }),
  location: {
    fontSize: SIZES.medium - 2,
    fontFamily: FONT.regular,
    color: "#B3AEC6",
  },


  getBtn: {
    width: 50,
    color: COLORS.tertiary,
    padding: SIZES.xSmall,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.small,
  },
  buttonText: {
    fontSize: FONT.small,
    fontFamily: FONT.bold,
    color: COLORS.white,
  },
  couponContainer: {
    border: "1px solid"+COLORS.tertiary,
    borderRadius: SIZES.xSmall,
    padding: SIZES.xSmall,
    backgroundColor: COLORS.white,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    columnGap: SIZES.xSmall,
  },
  Title: {
    fontSize: SIZES.medium,
    fontFamily: FONT.medium,
    color: COLORS.primary,
  },
  Description: {
    fontSize: SIZES.small - 2,
    fontFamily: FONT.regular,
    
  }
});

export default styles;
