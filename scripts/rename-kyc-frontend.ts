import fs from 'fs';
const reps = [
  {f:'src/store/api/adminApi.ts', s:/useUpdateKycStatusMutation/g, r:'useUpdateVerificationStatusMutation'},
  {f:'src/store/api/adminApi.ts', s:/users\/\\$\{id\}\\/kyc/g, r:'users/${id}/verification'},
  {f:'src/pages/signup/steps/Step3Profile.tsx', s:/kycIds/g, r:'internationalIdsArray'},
  {f:'src/pages/signup/steps/Step3Profile.tsx', s:/appendKycId/g, r:'appendId'},
  {f:'src/pages/signup/steps/Step3Profile.tsx', s:/removeKycId/g, r:'removeId'},
  {f:'src/pages/signup/steps/Step3Profile.tsx', s:/India KYC Details/g, r:'India Details'},
  {f:'src/pages/admin/verifications/details.tsx', s:/useUpdateKycStatusMutation/g, r:'useUpdateVerificationStatusMutation'},
  {f:'src/pages/admin/verifications/details.tsx', s:/Review the KYC information/g, r:'Review the information'},
  {f:'src/pages/admin/verifications/details.tsx', s:/kyc-/g, r:'doc-'},
  {f:'src/pages/admin/verifications/details.tsx', s:/Personal KYC ID/g, r:'Personal ID'},
  {f:'src/pages/admin/dashboard.tsx', s:/useUpdateKycStatusMutation/g, r:'useUpdateVerificationStatusMutation'},
  {f:'src/pages/admin/dashboard.tsx', s:/Pending KYC/g, r:'Pending Verifications'},
  {f:'src/components/admin-notification-bell.tsx', s:/for KYC verification/g, r:'for verification'},
  {f:'src/store/slices/notificationsSlice.ts', s:/for KYC/g, r:'for verification'}
];
reps.forEach(rep => {
  const p = 'd:/Projects/AECCI/global/Aecci_main/' + rep.f;
  if (fs.existsSync(p)) {
    let c = fs.readFileSync(p, 'utf8');
    c = c.replace(rep.s, rep.r);
    fs.writeFileSync(p, c);
    console.log('Fixed', p);
  }
});