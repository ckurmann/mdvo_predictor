# MDVO Predictor

**Research and Education Use Only. Consult healthcare professionals for individual patient care.**

A web-based clinical decision support tool for predicting differential treatment response to endovascular therapy (EVT) in patients with medium or distal vessel occlusions (MDVO).

🌐 **Live app**: [ckurmann.github.io/mdvo_predictor](https://ckurmann.github.io/mdvo_predictor/)

---

## About

This tool implements a TabPFN-based machine learning classifier trained on stroke patients from the Inselspital University Hospital Bern (Switzerland) stroke registry and validated on the randomized controlled DISTAL trial. It estimates the probability of an excellent neurological outcome (EENO) with best medical therapy (BMT) alone, and derives an EVT recommendation based on Heterogeneity of Treatment Effect (HTE) analysis.

**Reference**: Kurmann CC et al. *Prediction of Differential Treatment Response to EVT in MDVO Patients: A DISTAL Subanalysis.* 2026.

---

## Input Variables

| Variable | Type | Description |
|---|---|---|
| Age | Continuous | Years |
| Sex | Binary | Male / Female |
| NIHSS | Continuous |  |
| Glucose | Continuous | mmol/L |
| Onset to Image | Continuous | Minutes |
| Pre-stroke mRS | Continuous |  |
| Tmax >6s | Continuous | ml (tissue at risk) |
| Vessel Occlusion | Categorical | Co-/Non-dominant M2, M3+, A1, A2+, P1, P2 |
| IVT administered | Binary | Yes / No |
| Antiplatelets | Binary | Yes / No |
| Anticoagulants | Binary | Yes / No |
| Diabetes | Binary | Yes / No |
| Atrial Fibrillation | Binary | Yes / No |
| History of Stroke | Binary | Yes / No |
| History of TIA | Binary | Yes / No |
| Arterial Hypertension | Binary | Yes / No |

---

## Output

- **Probability** of EENO with BMT alone (% with 95% CI via bootstrapping, 1000 iterations)
- **EVT Recommendation** derived from HTE analysis:
  - *EVT not recommended* — if the lower bound of the 95% CI exceeds 23%
  - *Consider EVT* — otherwise

---

## Disclaimer

This tool is intended for **research and educational purposes only**. It does not constitute medical advice and should not be used as the sole basis for clinical decision-making. Always consult qualified healthcare professionals for individual patient care.
