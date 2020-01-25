package com.example.fuelman.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.EditText;
import android.widget.Toast;

import com.example.fuelman.R;
import com.example.fuelman.utils.Constants;
import com.example.fuelman.utils.Utils;
import com.google.gson.JsonObject;
import com.koushikdutta.async.future.FutureCallback;
import com.koushikdutta.ion.Ion;

public class RegisterActivity extends AppCompatActivity {

    EditText editName, editEmail, editMobileNo,editPassword;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_register);

        Log.d("RegisterActivity","on Register is called");
        editName = findViewById(R.id.editName);
        editEmail = findViewById(R.id.editEmail);
        editMobileNo = findViewById(R.id.editMobileNo);
        editPassword = findViewById(R.id.editPassword);

    }

    public void onRegister(View v)
    {
        String email = editEmail.getText().toString();
        String name = editName.getText().toString();
        String mobileNo = editMobileNo.getText().toString();
        String password = editPassword.getText().toString();



        if(name.length() == 0 )
        {
            editName.setError("Name is Mandetory");
        }else if (email.length() == 0)
        {
            editEmail.setError("Email is Madetory");
        }else if (password.length() == 0)
        {
            editPassword.setError("Password is mandetory");
        }
        else if (mobileNo.length() == 0)
        {
            editMobileNo.setError("Mobile is mandetory");
        }
        else
        {

            final String url = Utils.getUrl(Constants.PATH_USER+"/"+"register");

            Log.e("RegistrationActivity","url:"+url);

            final JsonObject body = new JsonObject();
            body.addProperty("emailId", email);
            body.addProperty("password", password);
            body.addProperty("userName", name);
            body.addProperty("mobileNo", mobileNo);
            body.addProperty("userRole","user");


            Ion.with(this)
                    .load("POST", url)
                    .setJsonObjectBody(body)
                    .asJsonObject()
                    .setCallback(new FutureCallback<JsonObject>() {
                        @Override
                        public void onCompleted(Exception e, JsonObject result) {
                            String status = result.get("status").getAsString();
                            if (status.equals("success")) {
                                Toast.makeText(RegisterActivity.this, "User Registered Successfully", Toast.LENGTH_SHORT).show();
                                finish();
                            } else {
                                String error = result.get("error").getAsString();
                                Toast.makeText(RegisterActivity.this, error, Toast.LENGTH_SHORT).show();
                            }
                        }
                    });


        }

    }

    public void onCancel(View v)
    {
        Log.e("RegisterActivity","onCancel() is called");
        finish();
    }
}
