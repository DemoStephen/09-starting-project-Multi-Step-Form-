// const plans = useRef();
// const duration = useRef();
// const addOn = useRef();

// const [plan, setplan] = useState("Advanced");
// const [durations, setDurations] = useState("monthly");
// const [addOns, setAddOns] = useState([
//   {
//     name: "",
//     price: "",
//     abbr: "",
//     id: "",
//   },
// ]);

// const finishingUp = {
//   plan: {
//     planName: "",
//     planPrice: "",
//     planTimeline: "",
//   },
//   addOn: [
//     { addOnName: "", addOnPrice: "", addOnTimeline: "" },
//     { addOnName: "", addOnPrice: "", addOnTimeline: "" },
//     { addOnName: "", addOnPrice: "", addOnTimeline: "" },
//   ],
//   total: "",
// };

// function handlePlan(newPlan) {
//   setplan(newPlan);
// }
// function handleDuration() {
//   if (duration.current.checked) {
//     setDurations("yearly");
//   } else {
//     setDurations("monthly");
//   }
// }
// function handleAddOns(data) {
//   setAddOns((prev) => [
//     ...prev,
//     {
//       name: data.name,
//       price: data.price,
//       abbr: data.abbr,
//       id: data.id,
//     },
//   ]);
// }
