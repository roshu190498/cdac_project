package com.example.fuelman.activity;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;

import com.example.fuelman.R;

public class HomeActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_home);
    }

    public void onBookService(View view)
    {
        Intent intent = new Intent(HomeActivity.this,BookServiceActivity.class);
        startActivity(intent);
    }
}
